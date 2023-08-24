import 'element-plus/theme-chalk/dark/css-vars.css'
import '../style.css'
import { createApp } from 'vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import store from './store/index';



const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  app.use(ElementPlus, {
    locale: zhCn,
  })
app.use(store)
app.use(router)
app.mount('#app')
