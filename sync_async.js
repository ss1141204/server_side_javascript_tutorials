var fs = require('fs');//FILESYSTEM : 파일을 다룰 때 필요한 모듈
console.log(1);

//동기 Sync
var data = fs.readFileSync('data.txt', {encoding:'utf8'});//파일, 옵션(인코딩값)
console.log(data);

//비동기 readFileSync
console.log(2);
fs.readFile('data.txt', {encoding:'utf8'}, function(err, data1) {  //readFile : 백그라운드 실행
  console.log(3);
  console.log(data1);
})
console.log(4);//위함수는 백그라운드 실행, 그리고 바로 실행

/* 실행 결과
1
Hello Sync And Async

2
4
3
Hello Sync And Async
*/

//파일, 옵션(인코딩값), 콜백(익명함수) - readFile이 내부적으로 작업 끝나면 호출
//첫 번째 임자(err) : 익명함수 호출하면서 에러발생시, 에러 메세지 전달 / 안나면 null
//두 번째 (data) : 성공 시 data변수로 data.txt 내용 전달, 호출
//즉, 익명함수가 호출될 때 성공 -> body인 콘솔로그를 통해서 data.txt값 출력
