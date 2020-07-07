/**
 * 중요한 부분!!
 */


var os = require("os");
var path = require("path");

console.log('시스쳄의 hostname'+os.hostname());

var directories = ['users','mike','docs'];
console.log(directories);

var mergedir = directories.join();
console.log(mergedir);

var filepath = directories.join(path.sep);
console.log(filepath); //  == c:\users\mike\docs

//파일 두개를 묶어서 
var curpath = path.join('user/mike','notepad.exe');
console.log('패스위치 : '+curpath);

var _url = '1.html';
var filepath1 = path.join('product/event',_url);
var filepath2 = path.join('product/review',_url);

if(_url == '1.html'){
	console.log('호출 url 주소 리턴 : '+filepath1);
}else if(_url == '2.html'){
	console.log('호풀 url 주소 리턴 : '+filepath2);
}


// [ path.dirname ]디렉토리만 가져온다.
var filename = 'c:\\users\\mike\\notepad.exe'; // 디렉토리명 \ 파일명
path.dirname(filename);
console.log('디렉토리 위치 : '+path.dirname(filename));
// [ path.basename ]파일 명만 가져온다.
path.basename(filename);
console.log('파일이름 : '+path.basename(filename));
// [ path.extname ]파일 확장자 명만 가져온다.
path.extname(filename);
console.log('파일 확장자 명'+path.extname(filename));

//console.dir(url);


