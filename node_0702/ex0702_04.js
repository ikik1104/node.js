/**
 * function
 */

calc.add = function(a,b) {
	return a+b;
}

calc.multi = function(a,b) {
	return a*b;
}

calc.subtract = function(a,b) {
	return a-b;
}

calc.division = function(a,b) {
	return a/b;
}

add(10,5);
subtract(10,5);
multi(10,5);
division(10,5);

console.log(calc.add(10,5));
console.log(calc.subtract(10,5));
console.log(calc.multi(10,5));
console.log(calc.division(10,5));

