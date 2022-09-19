import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import * as dayjs from 'dayjs'
import * as isLeapYear from 'dayjs/plugin/isLeapYear' // 导入插件
import 'dayjs/locale/zh-cn' // 导入本地化语言

dayjs.extend(isLeapYear) // 使用插件
dayjs.locale('zh-cn') // 使用本地化语言

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000/api'
})
Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.filter('FormateTime',value => {
  return dayjs(value).format('YYYY-MM-DD')
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
