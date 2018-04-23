<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <news></news>
    <home></home>
  </div>
</template>

<script>
import news from './components/news.vue'
import home from './components/home.vue'
export default {
  name: 'App',
  components: {
    news,
    home
  }
}
</script>


