/**
 * static 상수, 메서드 정의 - 클래스 상수, 클래스 메소드
 * static 키워드가 붙은 상수, 메서드
 * - 호출시 : 클래스명.상수, 클래스명.메서드
 * static이 붙은 상수, 메서드는 stack의 static 메모리영역에 별도 저장되므로,
 * 객체 생성전 호출이 가능
 */

class Furit {
    //Field
    static MAX_SIZE = 10;
    // name;    //생락가능
    // color;
    // emoji;
    //Constructor
    constructor (name, color, emoji) {
        this.name = name;   //constrcutor밖에 선언되어 있는 name을 사용하기 위해 this 를 붙임
        this.color = color;
        this.emoji = emoji;

    }

    //Method
    static getName = () => {return this.name; }
    getName = () => {return this.name;}
    
    static create = (name, color, emoji) => {
        return new Furit(name, color, emoji);
    }

}

let apple = new Furit('apple', 'red', '🍎');

console.log(apple);
console.log(Furit.getName()); //클래스의 이름 출력
console.log(apple.getName()); //static와 서로 다른 메모리에 저장되기 때문에 에러가 발생하지 않음 -> 객체의 이름 출력

//create 함수로 lemon 객체 생성
let lemon = Furit.create('lemon', 'yellow', '🍋');  //static로 선언되어있기 때문에, 클래스명.함수이름 형식으로 사용
console.log(lemon);
console.log(lemon.getName());


