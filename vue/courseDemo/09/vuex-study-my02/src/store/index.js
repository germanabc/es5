import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import actions from './actions'
import mutations from './mutations'
// 模块（module）,
// 每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割

export default new Vuex.Store({
    modules:{
        mutations //是一个模块
    },
    actions
})