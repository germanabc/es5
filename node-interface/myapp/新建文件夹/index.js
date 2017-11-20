/*
* @Author: Administrator
* @Date:   2017-11-20 18:51:11
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-20 18:51:50
*/
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});