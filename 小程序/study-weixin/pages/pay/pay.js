
const paymentUrl = require('../../utils/config').paymentUrl
console.log('paymentUrl',paymentUrl)

//获取小程序实例getApp()，得到它上面的所有属性和方法
var app = getApp()

Page({
  onLoad: function() {
  },
  clickPay: function () {
    var self = this  //保存Page函数实例对象
    //支付按钮显示正在加载状态
    self.setData({
      loading: true
    })

        // 此处需要先调用wx.login方法获取code，然后在服务端调用微信接口使用code换取下单用户的openId
    // 具体文档参考https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-login.html?t=20161230#wxloginobject
    console.log('zhifu ')
    console.log(wx)

    app.getUserOpenId(function(err,openid){
         if(!err){
          console.log('获取的err', err)
           wx.request({
             url: paymentUrl,
             data: {
              openid
             },
             method: 'POST', // OPTIONS, GET, HEAD, , PUT, DELETE, TRACE, CONNECT
      
             success: function(res){
              console.log('success-res', res)
                var payargs=res.data.payargs

                wx.requestPayment({
                  timeStamp: payargs.timeStamp,
                  nonceStr: payargs.nonceStr,
                  package: payargs.package,
                  signType: payargs.signType,
                  paySign: payargs.paySign,
                  success: function(res){
                     alert('发起支付成功')
                  }
                })

                self.setData({
                  loading: false
                })
             }
          
           })
         }else{
           console.log('err:', err)
           //支付按钮关闭正在加载状态
           self.setData({
             loading: false
           })
         }
    })
    // wx.login({
    //   success: function(res){
    //     if(res.code){
          
    //       console.log('res',res)
    //          //发起网络请求,获取open_id
    //          wx.request({
    //           url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
    //            data: {
    //             code: res.code 
    //            },
    //            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //            // header: {}, // 设置请求的 header
    //            success: function(res){
         
    //             //  console.log('res',res)
    //            }
             
             
    //          })
    //     }
    //   }
    // })

    // wx.requestPayment(
    //   {
    //   'timeStamp': (new Date()).getTime()+'',
    //   'nonceStr': '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
    //   'package': 'prepay_id=*',
    //   'signType': 'MD5',
    //   'paySign': 'paySign = MD5(appId=wxd678efh567hg6787&nonceStr=5K8264ILTKCH16CQ2502SI8ZNMTM67VS&package=prepay_id=wx2017033010242291fcfe0db70013231072&signType=MD5&timeStamp=1490840662&key=qazwsxedcrfvtgbyhnujmikolp111111) = 22D9B4E54AB1950F51E0649E8810ACD6',
    //   'success':function(res){
    //     console.log('调起支付')
    //   },
    //   'fail':function(res){},
    //   'complete':function(res){}
    // })
  }
})
