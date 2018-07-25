const openIdUrl = require("./utils/config").openIdUrl

App({
  onLaunch: function () {
    // console.log('App Launch')
  },
  onShow: function () {
    // console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  //globalData 是开发者添加的任意的数据
  globalData: {
    hasLogin: false,
    openid: null
  },
  // lazy loading openid
  getUserOpenId: function(callback) {
    var self = this  //获取 App函数实例
    // console.log("self", self)

    if (self.globalData.openid) {
      // console.log("self.globalData.openid 存在")
      callback(null, self.globalData.openid)
    } else {
      console.log("self.globalData.openid 不存在")
      // 获取临时登录凭证（code）

     

      //  return false;
      wx.login({
        success: function(data) {
          //发起请求
          // console.log('openIdUrl',openIdUrl)
          console.log('data',data)
          wx.request({
            url:  'http://sdk.yunduoketang.cn/appApi/company/welcome',
            method:'post',
            data: {
              // companyId: 4,
              domain: 'laohei.yunduoketang.cn'
            },
            success: function(succ) {
              console.log('tokenData',succ)
               var gettoken=succ.data.data.token;
               console.log('gettoken',gettoken)  
               console.log('data.code',data.code)  
                
                wx.request({
                  url: openIdUrl,
                  method:'post',
                  data: {
                    token: gettoken,
                    code: data.code
                  },
                  success: function(res) {
                    console.log(' res', res)
                    self.globalData.openid = res.data.openid
                    console.log("获取的openid", res.data.openid)
                    // callback(null, self.globalData.openid)
                  },
                  fail: function(res) {
                    console.log('拉取用户openid失败，将无法正常使用开放接口等服务', res)
                    callback(res)
                  }
                })
            },
            fail: function() {
             
            }
          })
    

        },
        fail: function(err) {
          // console.log('wx.login 接口调用失败', err)
          callback(err)
        }
      })
    }
  }
})
