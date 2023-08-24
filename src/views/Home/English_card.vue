<template>
    <div class="english" v-loading="loading">
        <p>{{ word }}</p>
        <p>{{ tra }}</p>
        <p>{{ symbol }}</p>
        <p>{{ sentence }}</p>
        <p>{{ sentence_tra }}</p>

        <el-button @click="get_next" type="success" round>下一个</el-button>
        <el-button @click="listen" type="primary" round>试听</el-button>
    </div>
</template>

<script setup> 
import {ref, onMounted} from 'vue'
import axios from 'axios'
import { ElMessage,imageEmits, ElNotification } from 'element-plus';
import { format } from 'date-fns';

const emit = defineEmits(['upDate'])

const word_id = ref('');
const word = ref('');
const tra = ref('');
const symbol = ref('');
const sentence = ref('');
const sentence_tra = ref('')


const loading = ref(true)
const isListen = ref(true)

const error = () => {
    ElMessage.error('数据更新失败，请重新刷新页面')
}

function get_data() {
    axios.get(`http://8.130.35.235:5000/random_word`).then((res) => {
        word_id.value = res.data.wordRank;
        word.value = res.data.headWord;
        tra.value = res.data.content.word.content.trans[0].tranCn;
        symbol.value = res.data.content.word.content.ukphone;
        if(res.data.content.word.content.sentence.sentences[0].sContent){
            sentence.value = res.data.content.word.content.sentence.sentences[0].sContent;
        }
        sentence_tra.value = res.data.content.word.content.sentence.sentences[0].sCn;
        setTimeout(() => {
            loading.value = false;
        }, 300)
    })
}
function listen() {
    if (isListen.value) {
        listen_inside();
        isListen.value = false;
        setTimeout(() => {
            isListen.value = true;
        }, 500)
    }
}
function listen_inside() {
    const audioUrl = `https://dict.youdao.com/dictvoice?audio=${word.value}&type=1`;
    const audio = new Audio(audioUrl);
    audio.play();
}

onMounted(() => {
    get_data()
})
function get_next() {
    loading.value = true;
    const isFirst = localStorage.getItem("use");
    if (!isFirst) {
        localStorage.setItem("use", "isnotFirst");
        ElNotification({
            title: '注意',
            message: '这将会默认及记住了这个单词',
            type: 'warning',
            position: 'bottom-left',
        })
    } else {
        get_data()
    }
    const todayDate = new Date();
    const _todayDate = format(todayDate, 'yyyy-MM-dd')
    let words = null;
    var result = null;
    axios.get(`http://localhost:3000/posts/${_todayDate}`).then((res) => {
        words = res.data.words;
        const new_word = {
            "word_id": word_id.value,
            "word": word.value  
        }
        words.push(new_word);
        axios.patch(`http://localhost:3000/posts/${_todayDate}`, {
            words
        }).then(()=>{
            axios.get(`http://localhost:3000/number`).then((res)=>{
                result = Number(res.data.length) + 1;
                axios.patch(`http://localhost:3000/number`,{
                    "length":result
                }).then(()=>{
                    emit('upDate',result)
                }).catch(()=>{
                    error();
                })
            }).catch(()=>{
                error();
            })
        }).catch(() => {
            error();
        })
    }).catch(()=>{
        error();
    })
}
</script>

<style scoped>
.english {
    width: 100%;
    height: 100%;
}
</style>