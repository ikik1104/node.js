/**
 * 객체를 export
 */

var calc  = {}; //객체

calc.add  = function(a,b) {
	return a+b;
}

calc.substract = function(a,b) {
	return a-b;
}

calc.multi = function(a,b) {
	return a*b;
}

calc.division = function(a,b) {
	return a/b;
}

module.exports = calc; //calc 자체를 외부에서 사용하기 위해(하나하나 하기 귀찮으니까)