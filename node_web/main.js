/**
 *  main
 */

var url = require('url');
console.dir(url);

var http = require('http');
var fs = require('fs');

var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      response.writeHead(404); //비 정상적인 페이지로 돌려죠
      
      
 response.end();
 return;
    }
    response.writeHead(200);//정상적인 페이지로 돌려줘~
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3000);