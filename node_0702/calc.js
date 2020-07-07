/**
 * calc
 */


//외부에서 사용하게 하는 방법 :
exports.add = function(a,b) {
	return a+b;
}


//여기에서만 사용할 수 있다 
var multi = function(a,b) {
	return a*b;
}