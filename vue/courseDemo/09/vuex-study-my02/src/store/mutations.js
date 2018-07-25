// 引入一个，是es6的解构

import {
    INCREMENT,
    DECREMENT
} from './types'

import  getters from './getters'

const  state={
    count:20
}

//mutations 要使用state,所以state在这里定义
const  mutations={
    [INCREMENT](state){
       state.count++
    },
    [DECREMENT](state){
        state.count--
     }
}
//导出一个模块
export default {
    state,
    mutations,
    getters
}