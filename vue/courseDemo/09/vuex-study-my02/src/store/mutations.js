// 引入一个，是es6的解构

import {
    INCREMENT
} from './types'

const  state={
    count:20
}


const  mutations={
    [INCREMENT](){
       state.count++
    }
}

export default {
    state,
    mutations
}