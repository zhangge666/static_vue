<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside" width="15%">
        <navmenu />
      </el-aside>
      <el-main class="main">
 <!--        <button @click="colorMode='dark'">点我</button>
        <button @click="colorMode='light'">点我</button>
        {{ isDark }} -->
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import Navmenu from './views/Home/navmenu.vue'
import {useColorMode,useDark} from '@vueuse/core'
import axios from 'axios';
import {onMounted} from 'vue'
const colorMode = useColorMode({});

const start_Time = new Date().getTime();
const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
})

onMounted(()=>{
  window.addEventListener("beforeunload", (event) => {
    const curren_time = new Date().getTime();
    const time = (curren_time - start_Time);
    const user_id = localStorage.getItem("user_id");
    axios.get(`http://127.0.0.1:5000/get_study_data?user_id=${user_id}&time=${time}`)
});
})

function upDateSturyTime(){
  console.log("ceshi");
  const curren_time = new Date().getTime();
  const timeOnPage = (curren_time - start_Time);
  axios.get(`http://127.0.0.1:5000/get_study_data?user_id=100`)
}


</script>

<style scoped>
.aside{
  width: 13vh;
  display: flex;
  flex-direction: column; /* 垂直排布 */
  height: 95vh; 
  background-color: white;
  border-radius: 15px;
  box-shadow: var(--el-box-shadow-light)
}
.main{
  padding: 0 var(--el-main-padding);

}

</style>
