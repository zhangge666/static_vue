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
  import Navmenu from './navmenu.vue'
  import { connectWebSocket, CloseSocket } from '../../../until/websocketserver'
  import axios from 'axios';
  import {onMounted} from 'vue'
 
  
  onMounted(()=>{
    connectWebSocket()
    window.addEventListener("beforeunload", (event) => {
        CloseSocket();
    });
    const start_Time = new Date().getTime();
    window.addEventListener("beforeunload", (event) => {
      const curren_time = new Date().getTime();
      const time = (curren_time - start_Time);
      const user_id = localStorage.getItem("user_id");
      axios.get(`http://8.130.35.235:5000/update_study_time?user_id=${user_id}&time=${time}`)
  });
  })
  
  </script>
  
  <style scoped>

.dark aside{
    background-color: #1D1D1D;
}

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
  