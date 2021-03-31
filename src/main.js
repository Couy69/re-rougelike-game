import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/base.scss'

import {
  getAxiosInstance
} from '@/assets/js/api' // 导入api接口
getAxiosInstance().then(v => {
  Vue.prototype.$api = v
}).catch(e => {
  console.log(e)
});

const vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Message from './views/uiComponent/message/index'
Vue.prototype.$message = Message

export default vue;