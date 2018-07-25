<template>
  <div id="app">
    <Loading v-if="loading"></Loading> 
    <!-- headShow是getters 返回的headShow -->
    <NavHeader v-show="headShow"></NavHeader>

    	<transition name="slide-down">
        <keep-alive> 
        <!-- 缓存组件状态避免DOM重复渲染 -->
        <!-- 匹配的路由在这里展示 -->
          <router-view></router-view>
        </keep-alive>
      </transition>

    <!-- footerShow是 getters 返回的footerShow -->
    <Footer v-show="footerShow"></Footer>
  </div>
</template>

<script>
import Vue from 'vue'
import NavHeader from './components/Nav.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'



import {mapGetters} from 'vuex'
export default {
  name: 'app',
  components:{
    NavHeader,
    	Home,
      Footer
  },
  // mapGetters表示使用对象展开运算符将 getters 混入 computed 对象中
  // mapGetters里面的都是store.js里面的getters的方法名
  computed:mapGetters([
      'headShow',
      'loading',
      'footerShow'
  ]),
  // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
  mounted(){
    //刚进入页面时，判断组件类型
     var path=this.$route.path.substring(1);
    //  console.log('path',path)
     this.headerChange(path)
     this.footerChange(path)
  },
  //监听路由变化
  watch:{
    // to是变化的路由实例对象
   $route(to){
    //  console.log('to',to)
     var watchPath=to.path.substring(1);
     this.headerChange(watchPath)
     this.footerChange(watchPath)
   }
  },
  methods:{
    headerChange(path){
      if(path=='user-info'||path=='user-reg'||path=='user-login'||path.indexOf('article')!=-1){
        this.$store.dispatch('SHOW_HEAD_FAIL')    
      }else{
        this.$store.dispatch('SHOW_HEAD_SUCC')
      }
    },
    footerChange(path){
      if(path.indexOf('article')==-1){
        // 把 store 选项放到 new Vue() 中，
        // 相当于把 store的实例 this.$store 注入到所有的组件中
        // 所以我们在这里可以获取到this.$store.dispatch 方法
        this.$store.dispatch('showFooter')    
      }else{
        this.$store.dispatch('hideFooter')
      }
    }
  }
}
</script>

<style>
	.slide-up-enter-active, .slide-up-leave-active {
	  transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
	  opacity: .7;
	  transform: translate3d(0, 4em, 0);
	}
	.slide-up-enter, .slide-up-leave-active {
	  opacity: .3;
	  transform: translate3d(0, 4em, 0);
	}

	.slide-down-enter-active, .slide-down-leave-active {
	  transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
	  opacity: .7;
	  transform: translate3d(0, 6em, 0);
	}
	.slide-down-enter, .slide-down-leave-active {
	  opacity: .1;
	  transform: translate3d(0, 6em, 0);
	}

	.slide-left-enter-active, .slide-left-leave-active {
	  transition: all .2s cubic-bezier(0, 1.2, 1, 0.5);
	  opacity: .5;
	  transform: translate3d(2em, 0, 0);
	}

	.slide-left-enter, .slide-left-leave-active {
	  opacity: .3;
	  transform: translate3d(2em, 0, 0);
	}

	.slide-right-enter-active, .slide-right-leave-active {
	  transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
	  opacity: .5;
	  transform: translate3d(5em, 0, 0);
	}
	.slide-right-enter, .slide-right-leave-active {
	  opacity: .3;
	  transform: translate3d(5em, 0, 0);
	}

	.fade-enter-active, .fade-leave-active {
	  transition: opacity .4s
	}
	.fade-enter, .fade-leave-active {
	  opacity: 0
	}
</style>
