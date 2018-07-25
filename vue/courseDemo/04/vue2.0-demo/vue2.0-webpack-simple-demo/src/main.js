import Vue from 'vue'
import App from './App.vue'


// {
//   render: h => h(App);
// }
// 等价于

// {
//   render: h => {
//       return h(App);
//   }
// }
// 等价于

// {
//   render: function(h) {
//       return h(App);
//   }
// }
// 即：

// {
//   render: function(createElement) {
//       return createElement(App);
//   }
// }

new Vue({
  el: '#app',
  render: h => h(App)
})
