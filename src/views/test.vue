<template>
  <div id="main" style="width: 100%;height:100%;text-align: center;"></div>
</template>
  
<script setup>
import { onMounted, watch } from 'vue';
import { useColorMode, useDark } from '@vueuse/core'
import * as echarts from 'echarts';
import axios from 'axios';
const isDarkMode = useDark({});
const user_id = localStorage.getItem('user_id');



watch(isDarkMode, (newVal) => {
  var myChart = echarts.init(document.getElementById('main'));
  myChart.dispose();
  var myChart = echarts.init(document.getElementById('main'));
  myChart.setOption(isDarkMode.value ? darkOption : lightOption);
});
const updateChartOptions = (darkMode) => {
  myChart.setOption(darkMode ? darkOption : lightOption);
};

onMounted(() => {
  localStorage.setItem('user_id', '2');

  
/*   const currentDate = new Date().toISOString().substr(0, 10); */
  var myChart = echarts.init(document.getElementById('main'));
  myChart.showLoading();
  myChart.setOption(isDarkMode.value ? darkOption : lightOption);
  axios.get(`http://8.130.35.235:5000/get_study_data?user_id=${user_id}`).then((res) => {
    myChart.hideLoading();
    console.log(res.data);
    const processedData = res.data.map(item => ({
      data_time: item.session_date, 
      data_date: item.study_time 
    }));

    const updatedOption = {
      xAxis: {
        data: processedData.map(item => item.data_time) // 使用处理后的时间数据更新 x 轴数据
      },
      series: [
        {
          data: processedData.map(item => item.data_date) // 使用处理后的日期数据更新图表数据
        }
      ]
    };
    
    myChart.setOption(updatedOption); // 更新图表
  });
});




const darkOption = {
  title: {
    text: '学习情况（深色模式）',
    textStyle: {
      color: '#fff' // 标题文字颜色
    }
  },
  tooltip: {},
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E', 'f', 'g'],
    axisLine: {
      show: false // 隐藏 x 坐标轴轴线
    },
    axisTick: {
      show: false // 隐藏 x 坐标轴刻度线
    },
    axisLabel: {
      color: '#fff' // x 坐标轴标签文字颜色
    }
  },
  yAxis: {
    splitLine: {
      show: false // 隐藏 y 坐标轴分隔线
    },
    axisLabel: {
      color: '#fff' // y 坐标轴标签文字颜色
    }
  },
  grid: {
    top: '10%',
    left: '10%',
    right: '10%',
    bottom: '10%',
  },
  series: [
    {
      type: 'line',
      smooth: true,
      data: [10, 22, 28, 23, 19],
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: '#4D90F9' },
            { offset: 1, color: 'transparent' }
          ]
        }
      },
      lineStyle: {
        color: '#4D90F9',
        width: 3,
      },
      itemStyle: {
        color: '#4D90F9' // 数据点颜色
      }
    }
  ],
  backgroundColor: '#1d1e1f', // 图表背景颜色
  textStyle: {
    color: '#fff' // 其他文字颜色
  }
};



const lightOption = {

  title: {
    text: '学习情况'
  },
  tooltip: {},
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E', 'f', 'g'],
    axisLine: {
      show: false // 隐藏 x 坐标轴轴线
    },
    axisTick: {
      show: false // 隐藏 x 坐标轴刻度线
    }
  },
  yAxis: {
    splitLine: {
      show: false // 隐藏 y 坐标轴分隔线
    }
  },
  grid: {
    top: '10%',
    left: '10%',
    right: '10%',
    bottom: '10%',
  },
  series: [
    {
      type: 'line',
      smooth: true,
      data: [10, 22, 28, 23, 19],
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: '#4D90F9' },
            { offset: 1, color: 'transparent' }
          ]
        }
      },
      lineStyle: {
        color: '#4D90F9',
        width: 3,
      }
    }
  ]
};
</script>
  