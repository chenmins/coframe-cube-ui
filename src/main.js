import Vue from 'vue'
import './cube-ui'
import "@/libs/XgeneCloudOptions";
import App from './App.vue'
import BaseVue from "@/libs/BaseVue";
import router from './router'
import axios from './axios/index'
import * as echarts from 'echarts';

import registerComponents from '/src/plugins/registerComponents'

//组件
import Nav from '@/components/Nav'
import Tabbar from "@/components/Tabbar";
import List from "@/components/List";
import Global from '@/libs/mixins/global'
import Tag from "@/components/Tag";
import LayOut from "@/components/LayOut";
import store from './store'
import calendar from 'vue2-slot-calendar';
import Icon from "@/components/Icon";
import ReadConfig from './utils/config'
import loading from "@/components/UI/loading";
import TitleNav from "@/components/UI/TitleNav";


import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import DayOfYear from 'dayjs/plugin/dayOfYear'
import useCalendar from 'dayjs/plugin/calendar'
import IsLeapYear from 'dayjs/plugin/isLeapYear'
import isBetween from  'dayjs/plugin/isBetween'
dayjs.extend(isoWeek).extend(DayOfYear).extend(useCalendar).extend(IsLeapYear).extend(isBetween)


Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$dayjs = dayjs
Vue.prototype.$echarts = echarts


Vue.config.silent = true
Vue.config.productionTip = false
Vue.config.sys_error_show = true
Vue.config.lang = 'zh_CN'


Vue.mixin(Global).mixin(BaseVue)
Vue.use(registerComponents, [
  Nav, Tabbar, List, Tag, LayOut, Icon, loading, calendar,TitleNav
])
window.vue =  new Vue({
  store
})
const create = async () => {
  await ReadConfig(Vue)
  Vue.prototype.$config = Vue.config
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
create();

