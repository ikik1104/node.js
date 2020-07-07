/**
 * 모듈 사용하기~ calc파일
 */

var calc = require('./calc'); //calc안에 export로 선언되어 있는 애들을 사용 할 수 있다.
var calc2 = require('./calc2'); //calc전체를 export로 선언했음

calc.add(10,5);
console.log('더하기:'+calc.add(10,5));
// console.log('곱하기:'+calc.multi(10,5)); export로 선언을 안해놔서 외부에서 파일을 땡겨올 수 없다.

console.log('calc 더하기 : '+calc2.add(20,10));
console.log('calc 빼기 : '+calc2.substract(20,10));
console.log('calc 곱하기 : '+calc2.multi(20,10));
console.log('calc 나누기 : '+calc2.division(20,10));
