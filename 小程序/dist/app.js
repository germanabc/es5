//app.js
App({
    // onLaunch回调函数小程序启动之后 触发
    onLaunch: function(opts) {
        // console.log( opts );
        // 保存API地址
        // wx.setStorageSync ,将data存储在本地缓存指定的key中
        wx.setStorageSync('host', 'http://sdk.yunduoketang.cn/appApi');
        // 导航菜单
        wx.setStorageSync('menu', ['首页', '课程', '我的']);

        // 获取设备信息
        wx.getSystemInfo({
            // 获取系统信息
            success: (e) => {
                if (e['errMsg'] === 'getSystemInfo:ok') {
                    // console.log( e );
                    let
                    // 需要的设备信息
                        arr = ['model', 'screenHeight', 'screenWidth', 'statusBarHeight', 'system', 'windowHeight', 'windowWidth', 'pixelRatio', 'fontSizeSetting'];

                    // 保存需要设置的信息
                    for (let i in arr) {
                        wx.setStorageSync(arr[i], e[arr[i]]);
                    }
                }
            },
            // 如果没有获取到系统属性
            fail: () => {
                let
                // 需要的设备信息
                    arr = ['model', 'screenHeight', 'screenWidth', 'statusBarHeight', 'system', 'windowHeight', 'windowWidth', 'pixelRatio', 'fontSizeSetting'],
                    val = ['other', 0, 375, 'other', 0, 375, 2, 16];

                // 保存需要设置的信息
                for (let i in arr) {
                    wx.setStorageSync(arr[i], val[i]);
                }
            }
        })
    },
    // 获取必要信息
    loadWelCome: function(callback) {
        let
        // API地址
            host = wx.getStorageSync('host') + '/company/welcome',
            // 发送的参数
            opts = {
                url: host,
                data: {
                    domain: wx.getStorageSync('domain')
                },
                header: {},
                // 方式需要大写
                method: 'POST',
                dataType: 'json',
                success: function(result) {
                    let data;

                    if (result['statusCode'] === 200 && !+result['data']['flag']) {
                        data = result['data']['data'];
                        // 循环保存诗句
                        // 保存token
                        wx.setStorageSync('token', data['token']);
                        // 保存视频账户
                        wx.setStorageSync('videoAccount', data['videoAccount']);
                    }

                    // 如果存在回调函数则执行回调函数
                    if (typeof callback === 'function') {
                        callback()
                    }
                },
                fail: function() {},
                complete: function() {}
            };

        // 请求远程参数
        if (wx.getStorageSync('host')) {
            wx.request(opts);
        } else {
            console.log('获取API域名失败');
        }
    },
    // 获得机构信息
    getCurrtCompany: function() {
        let
        // API地址
            host = wx.getStorageSync('host') + '/company/getCurrtCompany',
            // 发送的参数
            opts = {
                url: host,
                data: {
                    domain: wx.getStorageSync('domain')
                },
                header: {},
                // 方式需要大写
                method: 'POST',
                dataType: 'json',
                success: function(result) {
                    let data;

                    if (result['statusCode'] === 200 && !+result['data']['flag']) {
                        data = result['data']['data'];

                        // 保存数据
                        for (let i in data) {
                            wx.setStorageSync(i, data[i]);
                        }

                        // 寻找当前分校信息
                        for (let i in data['school']) {
                            // console.log( data['school'][i] );
                            if (data['school'][i]['defaultFlag']) {
                                // 当前学校信息
                                wx.setStorageSync('schoolId', data['school'][i]['id']);
                                wx.setStorageSync('schoolName', data['school'][i]['schoolName']);
                            }
                        }

                    }

                },
                fail: function() {},
                complete: function() {}
            };

        // 请求远程参数
        if (wx.getStorageSync('token')) {
            wx.request(opts);
        } else {
            console.log('获取域名失败');
        }
    }
})