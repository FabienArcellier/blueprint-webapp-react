/**
 * Basic server to host the webpage on PaaS environment
 * as Scalingo or Heroku
 */

var express = require('express');

var app = express();
var directory = '/' + ('build')
app.use(express.static(__dirname + directory));

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Listening on', port);
});
