import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router';
import './assets/css/reset.css';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App);
app.use(ElementPlus).use(router).mount('#app');
