<template>
    <div class="limit">
        <div class="stacked-container">
            <div ref="card1" class="stacked-card"></div>
            <div ref="card2" class="stacked-card"></div>
            <div ref="card3" class="stacked-card"></div>


        </div>

    </div>

    <button @click="anima_controller">点击消失</button>
    <div>ceshi1</div>
</template>
<script setup>
import { ref } from 'vue'
import { debounce } from 'lodash'
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
        thirdCard.style.transform = 'translateY(20px) scale(0.9) translateX(-50%)';
        thirdCard.style.backgroundColor = '#8BB6FC';
        thirdCard.style.zIndex = "2";
    }, 500);

    setTimeout(() => {
        topCard.style.transform = 'translateY(40px) scale(0.8) translateX(-50%)';
        topCard.style.backgroundColor = "#B6D1FC";
        topCard.style.opacity = '1';
    }, 500);
    topCard.style.opacity = '0';
    topCard.style.zIndex = '1'
    // 更新当前卡片索引
    currentCardIndex.value = (currentCardIndex.value + 1) % 3;
}

</script>

<style scoped>
.stacked-container {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 50px auto;
}

.stacked-card {
    position: absolute;
    left: 50%;
    /* 居中 */
    bottom: 0;
    width: 150px;
    /* 长度 */
    height: 200px;
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
.limit{
    width: 100%;
    height: 100%;
}
</style>