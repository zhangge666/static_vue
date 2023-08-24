<template>
    <div>login页面</div>
    <el-input v-model="user_id" placeholder="账号" />
    <el-input v-model="user_name" placeholder="用户名" />
    <el-input v-model="password" placeholder="密码" />
    <button @click="btn">登录</button>
</template>

<script setup>
import { routeLocationKey } from 'vue-router';
import router from '../router';
import {ref} from 'vue';
import axios from 'axios';

const user_id = ref(null);
const user_name = ref(null);

function btn(){
    localStorage.setItem('user_id',user_id.value);
    localStorage.setItem('user_name',user_name.value);
    router.push('/index')
}

function btn1(){
    axios.get(`xxx`).then((res)=>{
        if(res.data){
            localStorage
            router.push('/index');
        }else{

        }
    })
}
</script>