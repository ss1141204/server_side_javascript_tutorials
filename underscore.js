var _ = require('underscore');  //underscore사용 할 수 있는 객체 반환
//underscore는 _ 이름을 쓰는 관습있음

var arr = [3, 6, 9, 1 , 12];
console.log(arr[0]);  //3출력
console.log(_.first(arr));// first함수의 입력값으로 들어온 배열의 첫번째 원소 반환

console.log(arr[arr.length - 1]); //마지막 원소
console.log(_.last(arr));//위와 같은 코드, 간략
