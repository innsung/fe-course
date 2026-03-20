/**
 * 2단 ~ 9단 까지 구구단 출력
 */
let start = 3;
let end = 5;
for(let i=1; i<=9; i++) {
    let result = '';    //한 행을 출력하기 위한 행(row) 정의
    for(let j=start; j<=end; j++) {
        result += `${j} x ${i} = ${i*j} \t`;
    }
    console.log(result);
}

/**
 * 삼각형 별찍기
 */

/**
 * 
*
**
***
****
*****
 */
// let row = undefined;
// let col = undefined;
for(let i=1; i<=5; i++) {
    let result ='';
    // for(let j=1; j<=i; j++) {
    //     result += `*`;
    // }
    result += '🔥'.repeat(i);

    console.log(result);
}

/**
 * 삼각형으로 초록색 사과찍기
 * -세번째 줄만 빨간색 사과
 */

for(let i=1; i<=5; i++) {
    let result ='';
    for(let j=1; j<=i; j++) {
        if(i==3) {
            result += `🍎`;
        } else {
            result += `🍏`;
        }
    }
    console.log(result);
    
}

/**
 * 정삼각형 별찍기 - repeat(반복횟수)
    *
    **
 */
console.clear();
let size = 10;
for(let i=1; i<=size; i++){    //정삼각형
    let result = '';
    let space = '';
    space += ' '.repeat(size-i);
    result += '🔥'.repeat(i);
    console.log(space, result);
}
for(let i=size-1; i>=1; i--){    //역삼각형
    let result = '';
    let space = '';
    space += ' '.repeat(size-i);
    result += '🔥'.repeat(i);
    console.log(space, result);
}