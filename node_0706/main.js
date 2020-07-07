/**
 * http://usejsdoc.org/
 */

//http 모듈을 가져와서 서버를 구동을 시킨다.
var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
/*
var filepath = path.join(__dirname,'1.txt');
console.log(filepath);
// 인코딩을 해주지 않으면 숫자로 나온다 (기계어) 
var txt = fs.readFileSync(filepath,'utf-8');
console.dir(txt);

//다른 방법 
var txt2 = fs.readFileSync('1.txt','utf-8');
console.dir('readFileSync'+txt2);

//서버로 보내주면 html 파일이 열린다.
fs.readFile('file1.html','utf-8',function(error,data){
	console.log('readFile'+data);
});
 */


//이렇게 하면 서버..구동?
var app = http.createServer(function(request, response) {
	var _url = request.url; //사용자가 요청한 주소가 어떻게 되니? (도메인에 뭐라고 쳤니)
	
	//localhost:3000/1.html
	var queryData = url.parse(_url,true).query;
	console.log('[url 모듈에서 query 출력]');
	console.log(queryData);
	
	if(_url == '/'){ //localhost 3000으로 들어오는 애들은
		_url = '/index.html';
	}else if(_url=='/1.html'){
		_url = '/1.html';
	}else{
		response.writeHead(404);
		response.end();
		return;
	}
	response.writeHead(200);
//	response.end(url);
	response.end(fs.readFileSync(__dirname+_url));
	
});
//서버에 전달하겠다 
app.listen(3000); //3000 포트로 파일을 연다.