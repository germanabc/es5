<template>
	<div id="app">
		<loading v-if="loading"></loading>
		<NavHeader v-show="headShow"></NavHeader>
		<transition name="slide-down">
			<keep-alive>
	        	<router-view class="router-view"></router-view>
	      	</keep-alive>
		</transition>
		<FooterView v-show="footerShow"></FooterView>
	</div>
</template>
<script>
	import NavHeader from './components/Nav.vue'
	import FooterView from './components/Footer.vue'

	import Home from './components/Home.vue'

	import {mapGetters} from 'vuex'

	export default{
		computed:mapGetters([
			'headShow',
			'loading',
			'footerShow'
		]),
		// el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子函数
		mounted(){
			// 路由信息对象 this.$route
			console.log('this',this)
			var path=this.$route.path.substring(1);
		  console.log('path',path) //Home
			this.headerChange(path);
			this.footerChange(path);
		},
		// 观察 Vue 实例变化的一个表达式或计算属性函数, 当 router 变化时触发该函数
		watch:{
			$route(to){
				console.log('to',to) //$router对象
				var path=to.path.substring(1);
				this.headerChange(path);
				this.footerChange(path);
			}
		},
		methods:{
			headerChange(path){
				if(path=='user-info' || path=='user-reg' || path=='user-login' || path.indexOf('article')!=-1){
					this.$store.dispatch('SHOW_HEAD_FAIL')
				}else{
					this.$store.dispatch('SHOW_HEAD_SUCC')
				}
			},
			footerChange(path){
				if(path.indexOf('article')==-1){
					// Action 通过 store.dispatch 方法触发：
					this.$store.dispatch('showFooter');
				}else{
					this.$store.dispatch('hideFooter');
				}
			}
		},
		components:{ //注册组件
			Home,
			NavHeader,
			FooterView
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