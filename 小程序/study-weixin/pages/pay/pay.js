const paymentUrl = require("../../utils/config").paymentUrl;
console.log("paymentUrl", paymentUrl);

//获取小程序实例getApp()，得到它上面的所有属性和方法
var app = getApp()

Page({
  onLoad: function() {
  },
  requestPayment: function() {
    var self = this  //保存Page函数实例对象
    //支付按钮显示正在加载状态
    self.setData({
      loading: true
    })

    // 此处需要先调用wx.login方法获取code，然后在服务端调用微信接口使用code换取下单用户的openId
    // 具体文档参考https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-login.html?t=20161230#wxloginobject
    // console.log('zhifu ')
    // console.log(wx)

    app.getUserOpenId(function(err, openid) {
      if (!err) {
        console.log("获取的err", err);
        wx.request({
          url: paymentUrl,
          data: {
            openid
          },
          method: 'POST',
          success: function(res) {
            console.log('unified order success, response is:', res)
            var payargs = res.data.payargs
            wx.requestPayment({
              timeStamp: payargs.timeStamp,
              nonceStr: payargs.nonceStr,
              package: payargs.package,
              signType: payargs.signType,
              paySign: payargs.paySign,
              success: function(res) {
                alert("发起支付成功")
              }
            })

            self.setData({
              loading: false
            })
          }
        })
      } else {
        console.log('err:', err)
        self.setData({
          loading: false
        })
      }
    })
  }
})
