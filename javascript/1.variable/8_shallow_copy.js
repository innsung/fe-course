/**
 * shallow copy(얕은북사) - Array.from(original)
 * 객체의 얕은 복사는 복사본의 속성이 복사본이 만들어진 원본 객체와 같은 참조 (메모리 내의 같은 값을 가리킴)를 공유하는 복사입니다.
 * 따라서 원본이나 복사본을 변경하면, 다른 객체 또한 변경될 수 있습니다.
 * 
 * 객체의 요소가 원시데이터 타입인 경우에는 독립적으로 관리되고.
 * 객체의 요소가 참조데이터 타입인 경우에는 주소가 공유된다.
 */

let fruits = ['apple', 'orange', 'lemon'];
let fruitsCopy = Array.from(fruits);
console.log(fruits, typeof fruits);
console.log(fruitsCopy, typeof fruitsCopy);

//2.객체의 요소가 원시 데이터 타입인 경우
fruitsCopy[0] ='mango';
console.log(); // (--> fruits의 요사가 원시데이터이터 이므르 fritst에만 변경됨)
console.log(fruits, typeof fruits);
console.log(fruitsCopy, typeof fruitsCopy);

let fruitsObj = [
    {name: 'apple', emojo:'🍓'},
    {name: 'orange', emojo:'🍊'},
    {name: 'lemon', emojo:'🍋'}
    
];


let fruitsObjCopy = Array.from(fruitsObj);
console.log(fruitsObj, typeof fruitsObj);
console.log(fruitsObjCopy, typeof fruitsObjCopy);

fruitsObj[0].emojo = '🍏'
console.log();
console.log(fruitsObj, typeof fruitsObj);
console.log(fruitsObjCopy, typeof fruitsObjCopy);
