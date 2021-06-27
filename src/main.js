import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



const app = createApp(App); 
// 设置全局
// app.config.globalProperties.$toastVM = 'toastVM';
    
app.use(store).use(router).mount('#app')

