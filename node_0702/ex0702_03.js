/**
 * argv, env, exit
 */
//실행하고 있는 파일 위치
console.log('argv 속성 : '+process.argv);
console.log(process.argv);
console.log('실행하는 파일 위치 __filename'+__filename);

//배열의 길이
console.log('배열의 길이를 알 수 있음:'+process.argv.length);

//배열의 출력
process.argv.forEach(function(content,index) {
	console.log(index + ':'+content);
});

var arr1 = ['홍길동','김유신','유관순','강감찬','신사임당'];
arr1.forEach(function(content, index) {
	console.log(index + ':'+ content);
});

for (var i = 0; i < arr1.length; i++) {
	console.log(i + ' : '+arr1[i]);
}
