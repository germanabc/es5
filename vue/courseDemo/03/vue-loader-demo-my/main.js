/*
* @Author: shawn
* @Date:   2018-03-18 22:51:29
* @Last Modified by:   shawn
* @Last Modified time: 2018-04-14 18:42:01
*/

//es6引入模块  import 使用名字 from 地址
import	Vue from 'vue';
import	App from './App.vue';

new Vue({
	el: '#box',
	components:{
		app:App
	}
})