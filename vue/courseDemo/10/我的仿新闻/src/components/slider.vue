//轮播图模块

<template>
    <div class="banner">
        <ul class="clearfix">
            <li><img src="../assets/images/img_1.jpg" alt=""/>
            	<div class="text-box">
                	<h2>还可以降低首付款健身房11111</h2>
                    <p>刘德华11 / 文</p>
                </div>
            </li>
            <li><img src="../assets/images/img_2.jpg" alt=""/>
            	<div class="text-box">
                	<h2>还可以降低首付款健身房2222</h2>
                    <p>刘德华22 / 文</p>
                </div>
            </li>
            <li><img src="../assets/images/img_3.jpg" alt=""/>
            	<div class="text-box">
                	<h2>还可以降低首付款健身房333</h2>
                    <p>刘德华33 / 文</p>
                </div>
            </li>
            <li><img src="../assets/images/img_1.jpg" alt=""/>
            	<div class="text-box">
                	<h2>还可以降低首付款健身房11111</h2>
                    <p>刘德华11 / 文</p>
                </div>
            </li>
        </ul>
        <ol>
            <li class="active"></li>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </div>
</template>

<script>
// Vue 的单文件组件通常需要export导出一个对象，
// 这个对象是 Vue 实例的选项对象，以便于在其它地方可以使用 import 引入
    export default{
        mounted:function(){
            this.fnSlider();
        },
        methods:{
            fnSlider(){
                $(function(){
                      var mySwipe=new Swipe($('.banner')[0],{
						auto:2000,
						continuous:true,
						stopPropation:true,
						callback:function (index,element){
							$('.banner ol li').removeClass('active');
							$('.banner ol li').eq(index).addClass('active');
						}
					});
                })
            }
        }        
    }
</script>
