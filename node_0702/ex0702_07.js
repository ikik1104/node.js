/**
 * http://usejsdoc.org/
 */
//plus.js - module
//1~입력한 숫자 까지 총 합을 구하는 형태 함수
//숫자사이의 총 합을 구하는 형태 함수
//plus (10,54) 1~10까지 통합 함수ㄴ
//10~54까지 구하는 함수

//호출해서 사용하는 로직을 개발하시오

var plus = require('./plus');
var result = plus.plus(10,54);

console.log('1~10까지의 합 : '+result[0]);
console.log('10~54까지의 합:'+result[1])

