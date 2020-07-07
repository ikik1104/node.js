/**
 * http://usejsdoc.org/
 */

console.log('현재 실행한 path 위치 :'+__dirname);
console.log('현재 실행한 파일 명 : '+__filename);

//?? 뭘하는지 모르겠음
var _url = '\1.html';
console.log('이동한 페이지 : '+__dirname +_url);

//배열 선언 [ ] 
var person = ['d:/workspace','node_0706','index.html'];
console.dir('배열 출력 :'+person);

//객체 선언 { }
var obj = {name:'소녀시대',age:20};
console.dir(obj); //앞에 문구를 추가하면 안나온다 왜??ㅠㅠ

//객체는 dir로 출력
//일반적인 애들은 log로 출력?

//홍길동20 김유신30 유관순40 김구50 출력
var person2 = [{name:'홍길동',age:40},{name:'김유신',age:30},{name:'유관순',age:40},{name:'김구',age:50}];
console.dir(person2);

//배열 : 10,20,30,40,50 출력
var arr = [10,20,30,40,50];
console.time('for_arr');

for (var i = 0; i < arr.length; i++) {
	console.log((i+1)+'번째 :'+arr[i]);
}

console.timeEnd('for_arr');
console.time('forEach');
//약간 더 빠르다~
arr.forEach(function(item,index){
	console.log(index+'번째 데이터 값 (forEach): '+item);
});
console.timeEnd('forEach');




