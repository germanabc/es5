<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
     <h3>123</h3> 
     <input type="button" value="点击改变" @click="change">  
     <news></news>
  </div>
</template>

<script>
import news from './news.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome App'
    }
  },
  methods:{
    change(){
       this.msg="改变"
    }
  },
  components:{
  news
  }

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
