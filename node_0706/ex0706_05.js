/**
 * http://usejsdoc.org/
 */
//url = 'http://localhost:3000/aaa.html?id=admin&pass=1234&name='홍길동';

var url = require('url');
var queryString = require('querystring');

var _url = url.parse('http://localhost:3000/aaa.html?id=admin&pass=1234&name=홍길동');
//url.parse(_url.parse,true).query;
var addressUrl = url.parse(_url);
console.log(addressUrl);
console.log('host : '+addressUrl.host); 
console.log('hostname : '+addressUrl.hostname); 
console.log('pathname : '+addressUrl.pathname);

var addressQuery = url.parse(_url,true).query;
console.log('id : '+addressQuery.id);
console.log('pass : '+addressQuery.pass);
console.log('name : '+addressQuery.name);

var param = queryString.parse(addressUrl.query);
console.log('id : '+param.id);
