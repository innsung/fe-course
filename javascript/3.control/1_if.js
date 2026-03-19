/**
 * 제어문 : 조건 분기
 * 단일 if(조건절),
 * if(조건절) .. else..,
 * if(조건절1) .. else if(조건절2) .. else if(조건절3).. else
 * 
 * 💥삼항 연산자 : (조건절)? statement1 : statement2 ;
 * 
 */

// 입력되는 과일이름이 'apple'인 경우에만 이모지 출력
// 'apple'이 아닌 경우 과일 이름을 출력
let fname = undefined;
fname = 'orange';
if(fname == 'apple'){
    console.log('🍎');
} else {
    console.log(fname);
    
}

let result = fname == 'apple' ? '🍎' : fname;
console.log('삼항연산자 결과값 : ', result);

// console.log((fname == 'apple') ? console.log('🍎') : console.log(fname));

// 선택한 메뉴를 출력
let menus = ['pizza1', 'hotdog1', 'coffee1'];
if (menus[0] == 'pizza') {
    console.log('🍕');
} else if(menus[1] == 'hotdog') {
    console.log('🌭');
} else if(menus[2] == 'coffee') {
    console.log('☕');
} else {
    console.log('메뉴를 선택해주세요');
}

//입력받은 숫자가 홀수이면 사과, 짝수이면 오렌지 출력
let number = undefined;
let fresult = undefined
number = 124;
if (!(number % 2)) {   //조건식의 결과가 0, 1 이면, boolean 타입으로 자동변환
    // console.log('🍊');
    fresult = '🍊'
} else {
    fresult = '🍎';
}
console.log('실행결과 : ', fresult);

//삼항연산자
!(number % 2) ? fresult = '🍊' :  fresult = '🍎';
// console.log('실행결과(삼항)' : $({fresult};




