import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/common.less'

import dataV from '@jiaminghi/data-view'

// 按需引入vue-awesome图标
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/chart-bar.js'
import 'vue-awesome/icons/chart-area.js'
import 'vue-awesome/icons/chart-pie.js'
import 'vue-awesome/icons/chart-line.js'
import 'vue-awesome/icons/align-left.js'

// 适配flex
import '@/common/flexible.js'
// 引入全局css
import './assets/scss/style.scss'
// 引入echart
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 全局注册图标
Vue.component('icon', Icon)

Vue.config.productionTip = false

Vue.use(dataV)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
