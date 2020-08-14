//반드시 숙달!!!
//main파일
var express = require('express'); //express 모듈 로드(사용하기)

//express 모듈통해서 객체 생성
var app = express(); //모듈은 사실 함수임 -> express는 이 형식으로 사용해야함

app.use(express.static('public')); //**파일이 정적으로 위치할 dir 지정

app.get('/', function(req, res){ //요청객체, 응답객체
  res.send('Hello home page');//내장함수 , 해당 값을 응답
});
//사용자가 홈에 접속했을 때 get을 통해 /(home)으로 접속하면 두 번째 인자 함수 실행

app.get('/login', function(req, res){ //login 경로로 접속 [localhost:3000/login]
  res.send('<h1>Login please</h1>');
});

app.listen(3000, function(){
  console.log('Conneted 3000 port!');
}); //listener에 포트번호 지정 : 우리 웹 앱이 3000을 listener에

//get : "라우터" 라고 부름 -> 하는 일 : "라우팅"
//라우트 : 길을 찾는다.
//사용자 -> [라우터] get() -> [컨트롤러]send 익명함수 실행

app.get('/route', function(req, res) {
  res.send('Hello Router, <img src="/route.png">');
});

app.get('/dynamic', function(req, res) {
  var lis = '';
  for(var i = 0; i < 5; i++){
    lis = lis + '<li>coding</li>';
  }
  //현재시간 출력
  var time = Date();
  var output = `<!DOCTYPE html>
  <html lang="en" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
        Hello, dynamic!
        <ul>
          ${lis}
        </ul>
        ${time} <!-- reLoad시 마다 변경됨 -->
    </body>
  </html>`;
  res.send(output);
});
