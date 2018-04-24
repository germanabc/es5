//logs.js
Page({
  clickPay: function () {
    console.log('zhifu ')
    wx.requestPayment(
      {
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success':function(res){},
      'fail':function(res){},
      'complete':function(res){}
    })
  }
})
