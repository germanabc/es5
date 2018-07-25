import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 10
    },
    mutations: {
        increment(state) {
            console.log('mutations')
            state.count++
        },
        decrement(state) {
            console.log('mutations')
            state.count--
        }
    },
    actions: {
        increment(context) {
            console.log('actions')
            context.commit('increment')
        },
        decrement(context) {
            console.log('actions')
            context.commit('decrement')
        },
        clickOdd(context) {
            if (context.state.count % 2 == 0) {
                context.commit('increment')
            }

        },
        clickAsync(context) {

            new Promise(function(resolve) {
                return setTimeout(function() {
                    console.log('actions')
                    context.commit('increment')
                        //如果成功，执行resolve()
                    resolve()
                }, 1000)
            })

        }
    },
    getters: {
        count(state) {
            console.log('getters')
            return state.count
        },
        getOdd(state) {
            return state.count % 2 == 0 ? '偶数' : '奇数';
        }
    }

})