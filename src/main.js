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
import Calendar from 'vue2-slot-calendar';

import mock from "@/utils/mock/mock"; //mock数据的时候使用

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

Vue.component('Nav',Nav)
Vue.component('Tabbar',Tabbar)
Vue.component('List',List)
Vue.component('Tag',Tag)
Vue.component('LayOut',LayOut)
Vue.component('Calendar',Calendar)

Vue.mixin(Global)
Vue.use(Switch);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
