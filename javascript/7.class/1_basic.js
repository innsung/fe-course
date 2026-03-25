/**
 * class(클래스)란? 객체를 생성하기 위한 설계도(틀)
 * - 생성자 함수와의 차이점
 * - 객체지향언어의 클래스와는 다름을 이해
 * - 자바스크립트에서 실행시 내부적으로 프로토타입 기반의 형식으로 실행됨
 * - new 키워드를 사용하여 객체를 생성
 * 
 * 형식
 * class 클래스명 {
 *      //필드명(Field)
 *      //생성자(Constructor)
 *      //매소드(Method)
 * }
 */

const { useDebugValue } = require("react");

class Animal {
    //Field - 변수, 상수 => static 으로 정의, 클래스 변수, 상수로 부름
    //static으로 정의된 변수, 상수는 객체 생성 전 별도의 메모리에 저장됨(new라는 키워드를 사용하지 않아도 별도의 메모리에 저장->stack frame에 저장)
    static MAX_SIZE = 10;   //클래스를 만들기전에 호출 가능(메모리에 올라감) -> 형식 : 클래스명.static 변수명
    static className = 'Animal';
    // name = undefined;   //1. 선언

    //Constructor - 객체 생성시 호출, new
    constructor(name, emoji){
        this.name = name;   //2. 할당
        this.emoji = emoji;
    }

    //Method - 기능, 동작을 함수로 정의
    display = () => {
        console.log(this.name, this.emoji);
    }

}

console.log(`Class명 = ${Animal.className}`);
console.log(`Animal.MAX_SIZE = ${Animal.MAX_SIZE}`);
//static는 heap 영역에 없음, static 사용 이유 : 객체를 생성하지 않고 값을 호출하기 위해
let dog = new Animal('happy', '🐶');
console.log(dog);
console.log(dog.name);
console.log(dog.emoji);
console.log(typeof dog);
dog.display();  //static이름이 없기 때문에 객체이름(dog)으로 접근
// Animal.display();   //display 앞에 static가 붙었을 때, this.name, this.emoji에 값을 저장하지 않음(static 메모리에 값이 할당되지 않음, display의 주소값만 저장)

