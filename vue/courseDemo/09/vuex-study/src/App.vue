<template>
  <div id="app">
   <h3>wellcom vue</h3>
     <input type="button" value="增加" @click="increment">
        <input type="button" value="减少" @click="decrement">
        <input type="button" value="偶数才能点击" @click="clickOdd">
        <input type="button" value="点击异步" @click="clickAsync">
     <!-- <div>现在的数字是：{{$store.state.count}}</div> -->
     <div>现在的数字是：{{count}},它现在是{{getOdd}}</div>
  </div>
    
</template>

<script>
import {mapGetters,mapActions}  from 'vuex'
// 导出increment，方便在store.js里面可以找到
  export default {
    computed:
    // 使用对象展开运算符将 getter 混入 computed 对象中
    mapGetters([
     'count',
     'getOdd'
    ]),
     methods: mapActions([
       'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
        'decrement',
        'clickOdd',
        'clickAsync'
     ])
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
