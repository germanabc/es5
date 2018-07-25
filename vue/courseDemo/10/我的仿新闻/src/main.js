import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import './mock'
import routes from './routerConfig.js'
import stores   from './store/store.js'


import App from './App.vue'


import Loading from './components/loading'
//自定义组件使用Vue.use(组件名) 来使用

Vue.use(Loading);

Vue.use(VueRouter);//明确安装路由功能

require('./assets/css/base.css');//引入全局的base文件

const router=new VueRouter({
   //默认采用hash模式，会在路径下面加一个#
    mode: 'history', 
    scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    routes:routes
})

//axios 拦截器，在请求或者响应被then 或 catch处理前拦截他们
axios.interceptors.request.use(function(config){
 //请求之前做些什么
 console.log('stores',stores)
  stores.dispatch('showLoading')
  return config
},function(error){
  //对请求错误做些什么
  return Promise.reject(error)
})


axios.interceptors.response.use(function(response){
  //响应之前做些什么
  console.log('stores',stores)
 stores.dispatch('hideLoading')
   return response
 },function(error){
   //对响应错误做些什么
   return Promise.reject(error)
 })

 //其他页面在使用axios的时候, 直接this.$http 就行了
 Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store: stores,
  
  render: h => h(App)
})


