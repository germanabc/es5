/*
* @Author: Administrator
* @Date:   2017-11-07 17:16:04
* @Last Modified by:   shawn
* @Last Modified time: 2018-05-08 19:11:09
*/

// define() 定义模块
// 第二种 函数式定义：如果一个模块没有任何依赖，但需要一个做setup工作的函数，则在define()中定义该函数，并将其传给define()
define(function(){
	return {
        color: "black",
        size: "unisize"
    }
})