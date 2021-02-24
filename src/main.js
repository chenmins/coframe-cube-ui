import Vue from 'vue'
import './cube-ui'
import "@/libs/XgeneCloudOptions";
import App from './App.vue'
import BaseVue from "@/libs/BaseVue";
import router from './router'
import axios from  './axios/index'
import * as echarts from 'echarts';

//组件
import Nav from '@/components/Nav'
import Tabbar from "@/components/Tabbar";
import List from "@/components/List";
import Global from '@/libs/mixins/global'
import Tag from "@/components/Tag";
import LayOut from "@/components/LayOut";
import store from './store'
import Calendar from 'vue2-slot-calendar';
import NavLayOut from "@/components/NavLayOut";
import Icon from "@/components/Icon";
import ReadConfig from './utils/config'

// import mock from "@/utils/mock/mock"; //mock数据的时候使用

import { Switch } from 'vant';

import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import DayOfYear from 'dayjs/plugin/dayOfYear'
import calendar from 'dayjs/plugin/calendar'
import IsLeapYear from 'dayjs/plugin/isLeapYear'
dayjs.extend(isoWeek).extend(DayOfYear).extend(calendar).extend(IsLeapYear)


Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$dayjs = dayjs
Vue.prototype.$echarts = echarts


Vue.config.silent = true
Vue.config.productionTip = false
Vue.config.sys_error_show = true
Vue.config.lang = 'zh_CN'



Vue.component('Nav',Nav)
Vue.component('Tabbar',Tabbar)
Vue.component('List',List)
Vue.component('Tag',Tag)
Vue.component('LayOut',LayOut)
Vue.component('Calendar',Calendar)
Vue.component('NavLayOut',NavLayOut)
Vue.component('Icon',Icon)



Vue.mixin(Global).mixin(BaseVue)
Vue.use(Switch);


const create = async () => {
  await ReadConfig(Vue)
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
create()
Vue.prototype.$config = Vue.config

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
