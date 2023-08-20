<template>
    <div class="nva_headr">
        <p>Selfmind</p>
    </div>
    <div class="nav_center">
        <!--  <svg t="1692250302974" class="nav_center_icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="990" width="10vh" height="10vh">
            <path
                d="M130.0992 560.64l657.3568 365.6704a72.8064 72.8064 0 0 0 108.2368-63.6416V216.832a128.4608 128.4608 0 0 0-128.4608-128.4608H258.5088a128.4096 128.4096 0 0 0-128.4096 128.4608z"
                fill="#FFA4A4" p-id="991"></path>
            <path
                d="M895.6928 560.64L238.336 926.3104a72.8064 72.8064 0 0 1-108.2368-63.6416V216.832a128.4096 128.4096 0 0 1 128.4096-128.4608h508.7232a128.4608 128.4608 0 0 1 128.4608 128.4608z"
                fill="#F66462" p-id="992"></path>
            <path
                d="M532.48 246.0672l35.84 72.9088a21.5552 21.5552 0 0 0 16.2816 11.8784l80.4864 11.6736a21.6576 21.6576 0 0 1 12.032 36.9152L618.8544 436.224a21.8112 21.8112 0 0 0-6.2464 19.456l13.7728 80.1792a21.6576 21.6576 0 0 1-31.4368 22.784l-71.9872-37.8368a21.6064 21.6064 0 0 0-20.1728 0l-71.9872 37.8368a21.6064 21.6064 0 0 1-31.4368-23.04L413.1328 455.68a21.76 21.76 0 0 0-6.1952-19.2L348.672 379.4432a21.6576 21.6576 0 0 1 11.9808-36.9152l80.4864-11.6736a21.7088 21.7088 0 0 0 16.3328-11.8784l35.84-72.9088a21.6576 21.6576 0 0 1 39.168 0z"
                fill="#FFFFFF" p-id="993"></path>
        </svg>
        <svg t="1692250764683" class="nav_center_icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="1137" width="200" height="200">
            <path
                d="M120.3712 86.3232m101.9392 0l552.3968 0q101.9392 0 101.9392 101.9392l0 626.2272q0 101.9392-101.9392 101.9392l-552.3968 0q-101.9392 0-101.9392-101.9392l0-626.2272q0-101.9392 101.9392-101.9392Z"
                fill="#42B4FA" p-id="1138"></path>
            <path
                d="M531.968 535.552h-235.52a40.96 40.96 0 0 1 0-81.92h235.52a40.96 40.96 0 0 1 0 81.92zM681.6768 353.792H296.448a40.96 40.96 0 0 1 0-81.92h385.2288a40.96 40.96 0 1 1 0 81.92z"
                fill="#FFFFFF" p-id="1139"></path>
            <path d="M730.6752 737.6384m-202.0352 0a202.0352 202.0352 0 1 0 404.0704 0 202.0352 202.0352 0 1 0-404.0704 0Z"
                fill="#92DBFF" p-id="1140"></path>
            <path
                d="M841.5744 732.8256a40.96 40.96 0 0 0-57.6512-5.4272l-12.288 10.24V640a40.96 40.96 0 0 0-81.92 0v98.0992c-4.5568-3.7888-7.8336-6.6048-9.4208-7.9872a40.96 40.96 0 0 0-62.4128 52.6848c3.9936 5.632 4.864 6.8096 87.04 73.6256a40.96 40.96 0 0 0 51.968 0l79.2064-65.8944a40.96 40.96 0 0 0 5.4784-57.7024z"
                fill="#FFFFFF" p-id="1141"></path>
        </svg>
        <svg t="1692250855235" class="nav_center_icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="1283" width="200" height="200">
            <path
                d="M116.3776 86.3232m101.9392 0l552.3968 0q101.9392 0 101.9392 101.9392l0 626.2272q0 101.9392-101.9392 101.9392l-552.3968 0q-101.9392 0-101.9392-101.9392l0-626.2272q0-101.9392 101.9392-101.9392Z"
                fill="#FDBA54" p-id="1284"></path>
            <path
                d="M527.9232 535.552h-235.52a40.96 40.96 0 0 1 0-81.92h235.52a40.96 40.96 0 0 1 0 81.92zM677.6832 353.792H292.4544a40.96 40.96 0 0 1 0-81.92h385.2288a40.96 40.96 0 1 1 0 81.92z"
                fill="#FFFFFF" p-id="1285"></path>
            <path d="M726.6816 737.6384m-202.0352 0a202.0352 202.0352 0 1 0 404.0704 0 202.0352 202.0352 0 1 0-404.0704 0Z"
                fill="#FFDE8D" p-id="1286"></path>
            <path
                d="M832.1024 684.6976L752.64 619.1104a40.96 40.96 0 0 0-51.968 0c-81.92 66.56-82.944 67.9936-87.04 73.6768a40.96 40.96 0 0 0 62.4128 52.6336c1.5872-1.3824 4.864-4.1984 9.4208-7.936v98.048a40.96 40.96 0 1 0 81.92 0v-97.8432l12.288 10.24a40.96 40.96 0 0 0 52.1728-63.1808z"
                fill="#FFFFFF" p-id="1287"></path>
        </svg>
        <svg t="1692250898504" class="nav_center_icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="1431" width="200" height="200">
            <path
                d="M102.9632 122.5216m93.6448 0l629.0944 0q93.6448 0 93.6448 93.6448l0 447.4368q0 93.6448-93.6448 93.6448l-629.0944 0q-93.6448 0-93.6448-93.6448l0-447.4368q0-93.6448 93.6448-93.6448Z"
                fill="#42B4FA" p-id="1432"></path>
            <path
                d="M511.1296 240.2304a199.68 199.68 0 1 0 199.68 199.68 199.68 199.68 0 0 0-199.68-199.68z m-44.032 224.6656a69.0688 69.0688 0 1 1 69.0688-69.0688A69.0688 69.0688 0 0 1 467.0976 464.896z"
                fill="#FFFFFF" p-id="1433"></path>
            <path d="M790.9376 906.5472H244.0192a41.8304 41.8304 0 0 1 0-83.6096h546.9184a41.8304 41.8304 0 0 1 0 83.6096z"
                fill="#92DBFF" p-id="1434"></path>
        </svg> -->
        <el-menu class="el-menu-vertical-demo" collapse="false" router>
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>Navigator One</span>
                </template>
                <el-menu-item-group>
                    <template #title><span>Group One</span></template>
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title><span>item four</span></template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <template #title>Navigator Two</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <el-icon>
                    <document />
                </el-icon>
                <template #title>Navigator Three</template>
            </el-menu-item>
            <el-menu-item index="/about">
                <el-icon>
                    <setting />
                </el-icon>
                <template #title>Navigator Four</template>
            </el-menu-item>
        </el-menu>

    </div>
    <div class="nav_bottom">
        <p>bottom</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'



</script>

<style scoped>
.nav_header {
    padding: 20px;
    /* 可以根据需要设置内边距 */
}
.nva_headr p {
    width: 80%;
    margin: 20px auto;
    /* 可以根据需要设置内边距 */
}

.nav_center {
    flex: 1;
    /* 让中间部分自动扩展，占据剩余空间 */
    padding: 15px;
    /* 可以根据需要设置内边距 */
    display: flex;
    flex-direction: column;
    margin-top: 10vh;
}

.nav_bottom {
    align-self: flex-end;
    /* 将底部组件定位到 Flex 容器底部 */
    padding: 20px;
    /* 可以根据需要设置内边距 */
}

.test {
    height: auto;
    width: auto;
    margin: 8px;
}

.nav_center_icon {
    width: 100%;
    height: auto;
    text-align: center;
    margin: 12px 0;
}
.el-menu-vertical-demo{
    background-color: initial;
    border-right: 0;
}
.el-menu-item:hover{
    background-color: initial;
}
</style>

