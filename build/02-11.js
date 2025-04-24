"use strict";

var obj = {
  result: 0
};
obj.add = function (x, y) {
  this.result = x + y;
};
var add2 = obj.add; //메모리 복사 -> obj.add와 add2는 같은 주소를 참조하는 동일한 함수 
console.log(add2 === obj.add); // true, 동일한 함수 
add2(3, 4); //add2 함수는 특정 객체의 메서드가 아니므로 전역 객체가 this로 연결됨. 전역변수 result에 7이 할당됨
console.log(obj); // { result : 0}
console.log(result); // 7