/**
 * http://usejsdoc.org/
 */


//파일 명? 을 써줘야함 ㅠ 이 파일 안에 있는 객체들이 몽땅 들어간다.(외부에서 사용 가능한 애들만?)
var calc = require('./calc'); 


calc.add(20,10);

console.log('calc 객체에서 더하기 함수 호출 : '+calc.add(20,10));