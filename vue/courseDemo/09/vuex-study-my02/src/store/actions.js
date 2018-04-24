import * as types from './types'

export default {
    increment(context) {
        // context.commit('increment')
        context.commit(types.INCREMENT)
    },
    decrement(context) {
        // context.commit('increment')
        context.commit(types.DECREMENT)
    },
    clickOdd(context) {
        // context.commit('increment')
        // alert(context.state)
        // console.log(context.state.mutations.count)
        if(context.state.mutations.count%2==0){
           
            context.commit(types.INCREMENT)
        }
        
    },
    clickAsync(context) {
        new Promise(function(resolve) {
            return setTimeout(function() {
                console.log('actions')
                context.commit(types.INCREMENT)
                    //如果成功，执行resolve()
                resolve()
            }, 1000)
        })
    }
}