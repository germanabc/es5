Page({
    handleTap1: function(event) {

        console.log('handleTap1 bind:touchstart')
    },
    handleTap2: function(event) {
        console.log(event)
        console.log('handleTap2 capture-bind:touchstart')
    },
    handleTap3: function(event) {
        console.log('handleTap3 bind:touchstart')
    },
    handleTap4: function(event) {
        console.log('handleTap4 capture-bind:touchstart')
    },
    bindViewTap:function(event){
        event.currentTarget.dataset.alphaBeta === 1 // - 会转为驼峰写法
        event.currentTarget.dataset.alphabeta === 2 // 大写会转为小写

         console.log(event);
    }
})