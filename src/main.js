import Vue from 'vue'
import './cube-ui'
import "@/libs/XgeneCloudOptions";
import App from './App.vue'
import router from './router'
import axios from  './axios/index'
import Nav from '@/components/Nav'
import Tabbar from "@/components/Tabbar";
import List from "@/components/List";
import Global from '@/libs/mixins/global'
import Tag from "@/components/Tag";
import LayOut from "@/components/LayOut";
import store from './store'
import '@/utils/mock/mock'



Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.component('Nav',Nav)
Vue.component('Tabbar',Tabbar)
Vue.component('List',List)
Vue.component('Tag',Tag)
Vue.component('LayOut',LayOut)

Vue.mixin(Global)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
