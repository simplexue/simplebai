import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'ant-design-vue/dist/antd.less'
import '@/assets/icon/iconfont.css'
import './assets/less/global.less';

Vue.config.productionTip = false

Vue.use(Antd)

axios.defaults.baseURL = 'http://localhost:8080';
Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
