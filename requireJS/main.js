/*
 * @Author: Administrator
 * @Date:   2017-11-07 18:09:55
 * @Last Modified by:   shawn
 * @Last Modified time: 2018-05-08 19:08:17
 */
require.config({
    paths: {
        baseUrl: 'lib/',
        "a": 'a',
        "b": 'b',
    }
});

require(["lib/a", "lib/b"], function() {
    console.log('a和b加载成功')
});