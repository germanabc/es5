<template>
    <div class="content">
    <Slider></Slider>
    <div class="newsList">
         <ul>
                   <li v-for="(item ,index) in arrList" v-bind:key=item.id>
                        <router-link :to="'/article/'+item.id">
                            <h2>{{index+1}}. {{item.title}}</h2>
                            <p>{{item.detail}}</p>
                        </router-link>
                   </li>
         </ul>
    </div>         
    </div>
</template>

<script>
    // import '../assets/css/index.css'
    import Slider from './slider.vue'
    import axios from 'axios'
    export default{
        components:{
           Slider 
        },
        data:function(){
        //组件里面的data必须是一个函数，并且返回数据
             return {
                 arrList:[]
             }
        },
        mounted: function(){
            this.fetchDate();

            this.search();
        },
        methods: {
             
            fetchDate(){
                // 缓存住vue实例这个this
                var _this=this;
               axios.get('src/data/index.data').then(function(res){
                 _this.arrList=res.data;
                //   console.log('arrList',_this.arrList)
               })  
            },
            search(){
                axios('/abc/list').then(res=>{
                    console.log(res)
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }

</script>

<style scoped>
@import '../assets/css/index.css';
</style>


