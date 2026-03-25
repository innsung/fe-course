/**
 * 클래스간의 상속 관계 표현 : extends
 * 부모가 가지고 있는 필드, 메서드를 자식이 상속받아 사용하도록 정의
 */

//Aniaml(동물) 클래스를 상속받아, Dog, Tiger, Lion 자식 클래스 생성
//자식 is a 부모 : ⭕ => 자식 extends 부모 :: 자식클래스 정의 
// ❌

//부모 : Animal 클래스 정의
class Animal{
    constructor(name, emoji){
        this.name = name;
        this.emoji = emoji;
    }
    display = () => console.log(this.name, this.emoji);
    sleep = () => console.log(`${this.name}(${this.emoji})가(이) 잠을 잔다.`);
}

//자식 : Dog 클래스 정의, 자식 is a 부모 : ⭕
class Dog extends Animal{
    constructor(name, emoji, color){
        super(name, emoji);    //부모의 생성자 호출 후 name, emoji는 자식에 저장
        this.color = color;
    }
    //display() 함수 주소 참조(haep영역에 있는 주소값을 받음)
    //sleep() 함수 주소 참조(haep영역에 있는 주소값을 받음)
}
class Poodle extends Dog{
    constructor(name, emoji, color, food){
        super(name, emoji, color);
        this.food = food;
    }
    sleep = () => console.log(`poodle:: ${this.name}(${this.emoji})가(이) 잠을 잔다.`);
}

let animal = new Animal('animal', '😄');
console.log(animal);
animal.display();  
animal.sleep(); 

let dog = new Dog('happy', '🐶', 'brown');
console.log(dog);
dog.display();  //메소드는 공유 받아 같이 사용
dog.sleep();    //메소드는 공유 받아 같이 사용
dog.per

let dog2 = new Poodle('해피', '🐶', 'brown', '사료');
console.log(dog2);
dog2.display();  //메소드는 공유 받아 같이 사용
dog2.sleep();    //메소드는 공유 받아 같이 사용


