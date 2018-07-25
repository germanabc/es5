import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex) //明确安装vuex 功能


const state={
    headShow:true,
    footerShow:true,
    loading: false
}

//getters相当于computed,当state 发生变化时，
// 每一个计算属性函数的返回值会重新计算
const getters={
    headShow(state){
        return state.headShow
    },
    footerShow(state){
        return state.footerShow
    },
    loading(state){
        return state.loading
    }
}

const mutations={
    SHOW_HEAD_FAIL(state){
        state.headShow=false
    },
    SHOW_HEAD_SUCC(state){
        state.headShow=true
    },
    showFooter(state){
        state.footerShow=true
    },
    hideFooter(state){
        state.footerShow=false
    },
    showLoading(state){
        state.loading=true
    },
    hideLoading(state){
        state.loading=false
    },
    
}
 const actions={
    SHOW_HEAD_FAIL(context){
        context.commit('SHOW_HEAD_FAIL')
    },
    SHOW_HEAD_SUCC(context){
        context.commit('SHOW_HEAD_SUCC')    
    },
    showFooter(context){
        context.commit('showFooter')    
    },
    hideFooter(context){
        context.commit('hideFooter')    
    },
    showLoading(context){
        context.commit('showLoading')    
    },
    hideLoading(context){
        context.commit('hideLoading')    
    }
 }

export default  new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})


