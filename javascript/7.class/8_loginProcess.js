/**
 * 로그인 처리
 */
class User {
    #id;
    #password;

    constructor(id, passowrd){
        this.#id = id;
        this.#password = passowrd;
    }
    getId = () => this.#id;
    getPassword = () => this.#password;

    setId = (id) => this.#id = id;
    setPassword = () => this.#password;
}
function loginCheck() {
    //id, pwd 값 가져오기
    let id = document.querySelector('#id').value;
    let passowrd = document.querySelector('#pwd').value;
    // console.log(id, passowrd);

    //유효성 체크(Validation Check) - 데이터의 유, 무 체크
    if(id === ''){
        alert('아이디를 입력해주세요');
        document.querySelector('#id').focus();
    }else if(passowrd === ''){
        alert('패스워드를 입력해주세요');
    }else {
        //User 클래스 생성
        let user = new User(id, passowrd);
        let userObj = {id, passowrd}; //{id:'test', password:'1234'}
        console.log(user);
        console.log(userObj);
    }


    //User 클래스 생성
    let user = new User(id, passowrd);
    console.log(user);
    

    비교 => did = test, dpass=1234
    if(user.getId()==='test' && user.getPassword() ==='1234'){
        alert('로그인성공!!');
    } else {
        alert('아이디 혹은 패스워드가 일치하지 않습니다.');
    }
}
