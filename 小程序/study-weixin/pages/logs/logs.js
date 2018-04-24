//logs.js
Page({
  // data: {
  //   logs: []
  // },
  onLoad: function() {
  },
  navigateTo: function(){
   console.log(1)
    wx.navigateTo({
      url: '../pay/pay',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
