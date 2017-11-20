var express = require('express');
var cors = require('cors')
var app = express();
app.use(cors())
var bodyParser = require('body-parser');

app.get('/', function (req, res) {
  res.send('Hello World!');
});



app.get('/getData', function (req, res) {
	var obj = {
		aa:'11',
		bb:'22'
	}
  res.json(obj)
});



var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});