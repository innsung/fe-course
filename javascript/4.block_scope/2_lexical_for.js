//1~5까지 출력

// let j=200;
for(let i =1; i<6; i++){
    console.log(i, j); //j에서 에러 발생 ?? 이유를 정리!! >> 첫번째 for문과, 전역에 j가 선언된 부분이 없기 때문에

    for(let j =10; j<60; j += 10){
        console.log(i);
    }
}
//fruits 배열 요소 출력


let fruits = ['🍎', '🍏', '🍋'];
for(i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}