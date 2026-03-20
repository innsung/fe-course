/**
 * block 단위로 실행되는 lexical envrionment
 */

{
    let a=10;   //전역변수
    console.log(a);
    {
        let b=20;   //지역변수
        console.loga, (a. b, c);
        {
            let c=30;   //지역변수
            console.log(a, b, c);
        }//지역 스코프 : Local block scope
    }//지역 스코프 : Local block scope
}//전역 스코프 : Global block scope
