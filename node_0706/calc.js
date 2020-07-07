/**
 * http://usejsdoc.org/
 */

//객체 선언
var calc = {};

//함수를 변수에 넣을 수 있다. = 함수의 이름 지정이 가능하다.
calc.add = function(a,b) {
	return a+b;
};

calc.substract = function(a,b) {
	return a-b;
}

calc.multi = function(a,b) {
	return a*b;
}

calc.division = function(a,b) {
	return a/b;
}

//calc을 모듈화? 해준다. (외부에서 접근가능)
module.exports = calc;