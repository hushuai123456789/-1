/**
 * 入口文件
 * 
 * */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

new Vue({
  el:'#app',
  router,//使用上vue-router
  store,//使用上vueX
  render: h =>h(App),

})
