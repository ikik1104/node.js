/**
 * time
 */


var result = 0;
console.time('time_count');
//실행 구문 입력

for (var i = 0; i < 1000; i++) {
	result += i;
}

console.timeEnd('time_count'); //프로그램 종료 시간 입력

console.log('현재 실행한 파일 이름 : '+__filename);
console.log('현재 실행한 디렉토리 위치 : '+__dirname);