import Vue from 'vue'
import './cube-ui'
import './cube-ui'
import App from './App.vue'
import router from './router'
import axios from  './axios/index'
import Nav from './components/Nav'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.component('Nav',Nav)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
