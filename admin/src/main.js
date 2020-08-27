import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css' // 引入reset.css，使每个样式在不同浏览器中打开都是一样的效果
import store from './store/index.js' // 引入管理员的Vuex
import router from "./router" // 引入router
import './mock/index.js' // 使用mockjs模拟
import Antd from 'ant-design-vue' // 使用antdesign
import 'ant-design-vue/dist/antd.css' // 使用antdesign

Vue.config.productionTip = false

//引入全局变量组件
import globalVar from './util/const.js'
Vue.use(globalVar)

Vue.use(Antd) // 使用ant-design



new Vue({
  render: h => h(App),
  router, // 使用router路由
  store // 存放vuex中的公共数据
}).$mount('#app')
