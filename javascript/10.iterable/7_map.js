/**
 * Map : key, value를 한쌍의 데이터로 가지는 객체
 * - set(key, value) : 데이터 추가
 * - get(key) : 데이터를 반환
 * - has(key) : 데이터 체크(true, false 값)
 * - delete(key) : 데이터 삭제
 */
let fruitsMap = new Map();
fruitsMap.set('lemon', '🍋');
fruitsMap.set('apple', '🍎');
fruitsMap.set('orange', '🍊');
console.log(fruitsMap, typeof fruitsMap);
console.log(fruitsMap.get('lemon'));
console.log(fruitsMap.get('apple'));
console.log(fruitsMap.get('orange'));

//true : 🍎, false : 🍏 이모지 값으로 반환
let emoji = fruitsMap.has(('apple')) ? '🍎' : '🍏';

// if(fruitsMap.has('apple')){
//     console.log(fruitsMap.get('apple'));
// } else {
//     console.log('준비중입니다');
    
// }
console.log(fruitsMap.has('apple'));
console.log(emoji);

//업데이트 시 set() 데이터 없을 때 추가, 데이터가 존재하면 업데이트
fruitsMap.set('apple', '🍏');
console.clear();
console.log(fruitsMap);

//삭제 delete(key)
//데이터가 없으면 추가, 데이터가 있으면 삭제
if(fruitsMap.has('orange')) {
    fruitsMap.delete('orange')
} else {
    fruitsMap.set('orange');
}
console.log(fruitsMap);

//entries()
let fruitsArray = fruitsMap.entries();
console.log(fruitsArray);


