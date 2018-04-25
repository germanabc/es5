//app.js

const openIdUrl=require('./utils/config')
App({

  //小程序初始化函数，全局只触发一次
  onLaunch: function () {
   console.log('初始化')
  },
  //globalData 是开发者添加的任意的数据
  globalData:{
    hasLogin: false,
    openid: null
  },

  getUserOpenId: function(callback){
    var self = this //获取 App函数实例
    console.log('getUserOpenId-self',self)

    if(self.globalData.openid){
         console.log('self.globalData.openid 存在')
         callback(null, self.globalData.openid)
    }else{
      console.log('self.globalData.openid 不存在')
      // 获取临时登录凭证（code）
      wx.login({
        success: function(data){
          //发起请求
           wx.request({
              url: openIdUrl,
              data: {
                code: data.code
              },
              success: function(res){
                console.log('拉取openid成功',res)
                self.globalData.openid=res.data.openid
                console.log('获取的openid', self.globalData.openid)
                callback(null, self.globalData.openid)
              },

              fail: function(err){
                console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务', err)
                callback(err)
              }
           })
        }
       
      })
    }
  }

})