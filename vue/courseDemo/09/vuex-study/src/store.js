import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {
    count: 10
}

const mutations = {
    // increment函数来接收 ，这个参数state就是上面定义的state
    increment(state) { //处理状态（数据）变化
        state.count++
    },
    decrement(state) { //处理状态（数据）变化
        state.count--
    }
}


// Action 提交的是 mutation 里面定义的方法名，而不是直接变更状态
// Action 可以包含任意异步操作
const actions = {
    increment: ({ //处理你要干什么，一步请求，判断，流程控制
        commit
    }) => {
        // 提交increment， increment 就是一个函数
        commit('increment')
    },
    decrement: ({
        commit
    }) => {
        commit('decrement')
    },
    clickOdd: ({
        commit,
        state
    }) => {
        // alert(state.count)
        if (state.count % 2 == 0) {
            // 提交增加这个函数方法名
            commit('increment')
        }

    },
    clickAsync: ({
        commit
    }) => {

        // resolve 代表成功
        new Promise((resolve) => {
            setTimeout(function() {
                // alert(1)
                commit('increment')
                resolve()
            }, 1000)
        })
    },
}




const getters = {
    count(state) {
        return state.count
    },
    getOdd() {
        return state.count % 2 == 0 ? '偶数' : '奇数';
    }
}

// 导出Store 对象,Vuex.Store 是Vuex store 实例的根 state 对象
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})