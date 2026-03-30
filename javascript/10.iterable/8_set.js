/**
 * Set : 다양한 데이터 저장
 * - add() : 데이터 추가
 * - has() : 데이터 체크
 * - delete() : 데이터 삭제
 * - 중복된 데이터는 자동 필터링 됨
 */
let mySet = new Set();
mySet.add(100);
mySet.add('홍길동');
mySet.add({name:'apple'});
mySet.add([1, 2, 3, 4, 5]);
mySet.add('100');
mySet.add(100);     //중복된 데이터는 자동필터링 됨
console.log(mySet);
console.clear();

//데이터 출력
for(const value of mySet) {
    console.log(value);
}
// for(const value of mySet) {
//     if(mySet.has('홍길동')) console.log(value);
//     else console.log('데이터가 존재하지 않습니다.')
// }
console.log(mySet.has('홍길동'));

//홍길동이 존재하면 삭제
console.log('홍길동 검색 start ----->');

if(mySet.has('홍길동')){
    for(const value of mySet){
        if(value === '홍길동')
            console.log(value);
    }
}
console.log('홍길동 검색 end ----->');

console.log(mySet);

//모든요소 삭제
mySet.clear();
console.log(mySet);



