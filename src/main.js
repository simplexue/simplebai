import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.less'
import './assets/less/global.less';

Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
