<template>
    <div>login页面</div>
    <button @click="btn">点我登陆</button>
</template>

<script setup>
import { routeLocationKey } from 'vue-router';
import router from '../router'

function btn(){
    console.log("测试");
    router.push('/index');
}
</script>