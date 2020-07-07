/**
 * http://usejsdoc.org/
 */



exports.plus = function(a,b) {
	var result = [];
	sum1 = 0;
	sum2 = 0;
	
	for (var i = 1; i <= a; i++) {
		sum1 += i;
	}
	
	for (var i = a; i <= b; i++) {
		sum2 += i;
	}
	
	result[0] = sum1;
	result[1] = sum2;
	
	return result;
}