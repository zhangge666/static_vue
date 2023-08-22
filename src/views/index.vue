<template>
    <div class="container">
        <div class="left">
            <div class="body_haeder">
                <el-text class="mx-1" size="large">Hello Xiaozhang</el-text>
                <el-text class="mx-1" type="info" size="small">Welcome</el-text>
            </div>
            <div body_first_limit>
                <div class="body_first">
                    <div class="people">
                        <p>people</p>
                        <div class="stacked-container">
                            <div class="stacked-card"></div>
                            <div class="stacked-card"></div>
                            <div class="stacked-card"></div>
                            <el-button class="first_button" @click="anima_controller" link typr="info">
                                <svg t="1692324062423" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="3988" width="15px" height="15px">
                                    <path
                                        d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z"
                                        p-id="3989"></path>
                                </svg>
                            </el-button>
                        </div>
                    </div>
                    <div class="cards">
                        <div class="body_card_part1">
                            <el-card class="box-card">
                                <div class="left-content">
                                    <el-text class="mx-2" type="info">今日学习时间</el-text>
                                    <el-text class="mx-2" size="large">{{ learn_time }}min</el-text>
                                    <el-text class="mx-2" type="info">相较于昨天</el-text>
                                </div>
                                <div class="right-content">
                                    <el-progress :color="pressColor" type="circle" :percentage="pressPercentage" stroke-width="8" />
                                </div>
                            </el-card>
                            <el-card class="box-card">
                                <div class="left-content">
                                    <el-text class="mx-2" type="info">今日单词累计数</el-text>
                                    <el-text class="mx-2" size="large">{{ learn_time }}</el-text>
                                    <el-text class="mx-2" type="info">相较于昨天</el-text>
                                </div>
                                <div class="right-content">
                                    <el-progress type="circle" color='#6837F4' :percentage="25" stroke-width="8" />
                                </div>
                            </el-card>
                        </div>
                        <div class="body_card_part1_secend">
                            <el-card class="box-card">
                                <div class="left-content">
                                    <el-text class="mx-2" type="info">单词总量</el-text>
                                    <el-text class="mx-2" size="large">{{ learn_time }}</el-text>
                                </div>
                                <div class="right-content">
                                    <el-progress type="circle" color='#F35848' :percentage="25" stroke-width="8" />
                                </div>
                            </el-card>
                            <el-card class="box-card">
                                <div class="left-content">
                                    <el-text class="mx-2" type="info">今日学习时间</el-text>
                                    <el-text class="mx-2" size="large">{{ learn_time }}</el-text>
                                    <el-text class="mx-2" type="info">相较于昨天</el-text>
                                </div>
                                <div class="right-content">
                                    <el-progress type="circle" :percentage="25" stroke-width="8" />
                                </div>
                            </el-card>
                        </div>
                    </div>
                </div>
            </div>
            <div class="body_secennd">
                <div class="body_secennd_left">
                    <el-card class="box-card_english">
                        <template #default>
                            <div class="english_learn">
                               <English />
                            </div>
                        </template>
                    </el-card>
                </div>
            
                <!--   <div id="main"> -->
                <el-card id="main">
                    <template #default>
                        <div>
                            <Test />
                        </div>
                    </template>
                </el-card>
                <!--  </div> -->
            </div>
        </div>
        <div class="spacer"></div> <!-- 用于添加间距的空白块 -->
        <el-card class="right">
            <template #default>
                <div>
                    <el-calendar v-model="new_date" class="right_first" />
                </div>
            </template>
        </el-card>
        <!-- <div class="right">
            <el-calendar v-model="new_date" class="right_first" />
        </div> -->
    </div>
</template>

<script setup>
import { ref,onMounted,computed } from 'vue'
import Test from './test.vue'
import English from './English_card.vue'
import axios from 'axios';
const new_date = ref(new Date())
const learn_time = ref(0);
const learn_time_pass = ref(0);
const press = ref(0);
const card1 = ref(null);
const card2 = ref(null);
const card3 = ref(null);


const timer = ref(true);

const currentCardIndex = ref(0);

function anima_controller() {
    if (timer.value) {
        console.log(timer.value);
        timer.value = false;
        animateAndHide();
        setTimeout(() => {
            timer.value = true;
        }, 500)
    }
}

function pressColor(){
    if(((learn_time.value/learn_time_pass.value) < 1) && learn_time.value > 25){
        return "#409EFF"
    }else if(learn_time.value/learn_time_pass.value > 1 || learn_time.value > 120){
        return "#67C23A"
    }else{
        return "#F35848"
    }
}




onMounted(()=>{
    const user_id = localStorage.getItem("user_id")
    axios.get(`http://8.130.35.235:5000/get_study_time_lite?user_id=${user_id}`).then((res)=>{
        learn_time.value = res.data.today_study_time[0];
        learn_time_pass.value = res.data.yesterday_study_time[0];
    })
})

const pressPercentage = computed(()=>{
    const number = Math.floor((learn_time.value/learn_time_pass.value)*100);
    return number;
})

function animateAndHide() {
    const stackedCards = document.querySelectorAll('.stacked-card');
    const topCard = stackedCards[currentCardIndex.value];
    const secondCard = stackedCards[(currentCardIndex.value + 1) % 3];
    const thirdCard = stackedCards[(currentCardIndex.value + 2) % 3];

    // 隐藏当前卡片
    topCard.style.transform = 'translateX(-50%) translateX(-200px)';


    // 显示下一个卡片
    setTimeout(() => {
        secondCard.style.transform = 'translateY(0) scale(1) translateX(-50%)';
        secondCard.style.backgroundColor = '#4D90F9';
        secondCard.style.zIndex = "3";
    }, 500);
    setTimeout(() => {
        topCard.style.zIndex = '1'
        topCard.style.opacity = '0';
    },400)

    setTimeout(() => {
        thirdCard.style.transform = 'translateY(20px) scale(0.9) translateX(-50%)';
        thirdCard.style.backgroundColor = '#8BB6FC';
        thirdCard.style.zIndex = "2";

    }, 500);

    setTimeout(() => {
        topCard.style.transform = 'translateY(40px) scale(0.8) translateX(-50%)';
        topCard.style.backgroundColor = "#B6D1FC";
        topCard.style.opacity = '1';
    }, 500);

    // 更新当前卡片索引
    currentCardIndex.value = (currentCardIndex.value + 1) % 3;
}


</script>
<style scoped>
.container {
    display: flex;
    width: 100%;
}

.left,
.right {
    margin-right: 30px;
}

.right {
    /* background-color: white; */
}

.left {
    max-width: 65vw;
    flex: 2.5;
    display: grid;
    grid-template-rows: 40fr 200fr 240fr;
    /* 第一行自适应高度，第二行占据剩余空间 */
    grid-gap: 18px;
    height: 95vh;
}

.right {
    flex: 1;
    height: 95vh;
    margin: 0 20px 0 0 !important;
}

.box-card_english {
    width: 80%;
    height: 100%;
    margin: 0 auto !important;
}


:deep() .el-calendar {
    border-radius: 15px;
}

/* 通过添加 margin 来创建左右间距 */
.right {
    margin-left: 10px;
    /* 您可以根据需要调整间距的大小 */
}

.body_haeder {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 8vh;
    /* 设置容器高度为视口高度 */
}

.mx-1 {
    width: 100%;
}

.mx-2 {
    width: 100%;
    margin: auto;
    text-align: center;
}
:deep() .el-calendar{
    --el-calendar-border: 0;
    --el-calendar-cell-width: auto;
}

:deep() .el-card__body {
    display: flex;
    padding: 1vh;
}

.box-card {
    width: 50%;

}

.left-content {
    display: flex;
    flex: 65;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    overflow: hidden;
    /* 隐藏溢出的内容 */
    white-space: nowrap;
    /* 防止文本换行 */
    text-overflow: ellipsis;
    /* 在溢出处显示省略号 */
}

.body_secennd {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 30px;
}

.body_secennd_left {
    height: 100%;


    border-radius: 15px;
}

#main {
    height: 100%;
    /* background-color: white; */
    border-radius: 15px;
    margin: 0 8px 0 0 !important;
    padding: 20px;
    box-sizing: border-box;
}

.right-content {}

.el-card {
    --el-card-border-radius: 20px;
}

:deep() .el-progress-circle {
    height: 100px !important;
    width: 100px !important;
}

.body_card_part1,
.body_card_part1_secend {
    display: flex;
    width: 100%;
}

.body_first {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 30px;
}

.prople {
    width: 35vw;
}

.cards {
    margin: auto;
    width: 100%;
}

:deep() .el-card {
    margin: 8px 8px 8px 0;

}

.right_first {}

.stacked-container {
    position: relative;
    width: 240px;
    height: 240px;
    margin: auto;
}

.stacked-card {
    position: absolute;
    left: 50%;
    /* 居中 */

    width: 130px;
    /* 长度 */
    height: 180px;
    /* 高度 */
    border-radius: 15px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    transform-origin: bottom left;
    transition: transform 0.5s ease, opacity 0.5s ease, width 0.5s ease, height 0.5s ease, background-color 0.5s ease;
    transform: translateX(-50%);
    /* 居中 */
}

.stacked-card:nth-child(1) {
    background-color: #4D90F9;
    /* 最上面的卡片颜色 */
    transform: translateY(0) scale(1) translateX(-50%);
    /* 居中 */
    z-index: 3;
}

.stacked-card:nth-child(2) {
    background-color: #8BB6FC;
    /* 第二层卡片颜色 */
    transform: translateY(20px) scale(0.9) translateX(-50%);
    /* 居中 */
    z-index: 2;
}

.stacked-card:nth-child(3) {
    background-color: #B6D1FC;
    /* 第三层卡片颜色 */
    transform: translateY(40px) scale(0.8) translateX(-50%);
    /* 居中 */
    z-index: 1;
}

.arrow-container {
    position: absolute;
    top: calc(50% - 20px);
    /* 垂直居中 */
    width: 20px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 4;
}

.left-arrow-container {
    left: 0;
}

.right-arrow-container {
    right: 0;
}

.arrow {
    width: 0;
    height: 0;
    border-style: solid;
}

.left-arrow {
    border-width: 10px 15px 10px 0;
    border-color: transparent #000 transparent transparent;
    transform: rotate(180deg);
    /* 左箭头翻转 */
}

.right-arrow {
    border-width: 10px 0 10px 15px;
    border-color: transparent transparent transparent #000;
}

.first_button {
    position: absolute;
    top: 35%;
    right: 0;
}
</style>