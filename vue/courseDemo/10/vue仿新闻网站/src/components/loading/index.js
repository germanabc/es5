const LoadingComponent = require('./Loading.vue')
const loading = {
  //必须使用install 
  install: function(Vue) {
    Vue.component('loading', LoadingComponent)
  }
}
module.exports = loading

