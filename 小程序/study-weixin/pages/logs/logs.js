//logs.js
Page({
  // data: {
  //   logs: []
  // },
  onLoad: function() {
  },
  navigateTo: function(){

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
