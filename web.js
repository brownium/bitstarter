var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {
  srcFile="./index.html";
  srcString=fs.readFileSync(srcFile).toString();
  response.send(srcString);
  //response.send('Hello World 2!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
