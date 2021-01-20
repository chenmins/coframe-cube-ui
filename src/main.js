import Vue from 'vue'
import './cube-ui'
import "@/libs/XgeneCloudOptions";
import App from './App.vue'
import router from './router'
import axios from  './axios/index'
import Nav from './components/Nav'
import Global from '@/libs/mixins/global'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.component('Nav',Nav)
Vue.mixin(Global)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
