'use strict';

var forwarded = require('forwarded-for');

require('http').createServer(function (req, res) {
  var address = forwarded(req, req.headers);

  res.end('Your ip address is '+ address.ip);
}).listen(8080);
