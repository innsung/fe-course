/**
 * 함수는 객체(Object) 이고, 힙(Heap)에 저장됨
 * 일반적인 함수형식(function)로 선언되면, 호이스팅 되어 전역으로 맨 먼저 힙에 저장됨
 */

import { toNumber } from "../commons/utils.js";
function add(num1, num2) {
    let obj = toNumber(num1, num2)
    console.log(`sum = ${obj.num1 + obj.num2}`);
}

let add2 = add; //call by reference(주소가 복사)

console.log(add, typeof add);
console.log(add2, typeof add2);
console.log(add === add2);  //똑같은 값과 데이터 타입이 동일


add(100, '200');
add2('283823', 383)
