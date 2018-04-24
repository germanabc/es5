import * as types from './types'

export default {
    increment(context) {
        // context.commit('increment')
        context.commit(types.INCREMENT)
    }
}