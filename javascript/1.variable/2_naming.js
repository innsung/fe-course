/*
* -라틴어 (0~9, a~z, A-Z);
# 특스문주($, _ 사용가능 외의 특수문자는 사요불가)
-camle Case : 첫 글자 소문자 시작, 단어의 시작은 대문제 예camelcase) 
* - pascasl 첫글자 대문자로 시작, 중간 단어의 첫 시작은 대문자 예(passcalcase)
* - snack Case : 전체 소문자로, 중간 단어 연결시 사용 예)snack_case

** 주의사항
* - 숫자로 시작하면 x
* - 예약어(키워드)는 사용불가, 예) function, var, let, const...
* - 이모지 사용 불가
*/

//cmaelmone
let myName ='홍길동';
let myage= 30;
console.log(myName);
console.log(myage);

let my_name = '이순신';
let my_age = 30;
console.log(my_name);
console.log(my_age);

//저의 이름은 홍길동이고, 나이는 30살 입니다.
let output = '저의 이름은 ' + myName + '이고, 나이는 ' + myage + '살 입니다.';
console.log(output);

//템플릿 리터럴(Template Literal) : `출력 문자 ${변수명}`(백틱)
let output2 = `저의 이름은 ${myName}이고, 나이는 ${myage}살 입니다.`;
console.log(output);

// 상수 선언 : const, 변수명을 대문자로 선언함
const AUDIO_DEVICE_START = 0;
const AUDIO_DEVICE_CONTIUNE = 1;
const AUDIO_DEVICE_END = 2;
console.log(AUDIO_DEVICE_START);
console.log(AUDIO_DEVICE_CONTIUNE);
console.log(AUDIO_DEVICE_END);

