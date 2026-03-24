/**
 * 객체를 생성하는 함수 : 생성자 함수(Construcotr Function)
 * 객체의 메소드 정의 : 객체안에 함수형식으로 정의
 */

const fruit = {
    //Field
    name: 'apple',
    emoji: '🍎',

    //Method
    getName: function() {return this.name; },    //this 자가자신 해당 {} 안에서 찾을것 -> name을 {} 안(fruit)에서 찾아라
    getEmoji: function() {return this.emoji; },   
    display: function() {console.log(this.name, this.emoji)},
    //this 키워드는 현재 객체에서만 사용되는 self object 키워드
    //this.name은 property로 정의x
    // display: function() { return { this.name, this.emoji} }  
    display2: function() { return { name: this.name, emoji: this.emoji} }  
}

console.log(fruit);
console.log(fruit.name);
console.log(fruit.emoji);
console.log(fruit.getName());
console.log(fruit.getEmoji());
console.log(fruit.display());
console.log(fruit.display2());

