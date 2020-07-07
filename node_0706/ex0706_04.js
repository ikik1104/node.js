/**
 * http://usejsdoc.org/
 */

var url = require('url');
var queryString = require('querystring');

var addressUrl = url.parse('http://localhost:3000/1.html?query=css');
var addressUrl = url.parse('https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=%EA%B0%95%EC%95%84%EC%A7%80');

console.log('모듈 객체 변환 :');
console.dir(addressUrl);

/*

var param = queryString.parse(addressUrl.query);
console.log(param.id);
//console.log('요청 파라미터 중 query의 값 출력'+param.query);

console.log('format : ');
var addressStr = url.format(addressUrl);
*/

//var queryData = url.parse(addressUrl,true).query;
//console.log(queryData);