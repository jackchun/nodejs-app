require('http').createServer(function (req, res) {
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
  res.end('Your ip address is '+ ip);
}).listen(8080);
