window.addEventListener('DOMContentLoaded', () => {
    showEmployees();
})
//1. JSON 데이터 가져오기
const data_url = 'http://127.0.0.1:5500/javascript/13.asyncronuos/employees.json';

const getJson = async () => {
    let response = await fetch(data_url);
    return response.json();
}


const showEmployees = async () => {
    let employees = await getJson();

    let output = `
        <h2>${employees.title}</h2>
        <table border=1>
            <tr>
                <th>NO</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>DEPARTMENT</th>
            </tr>
            ${  //자바스크립트 코드
                
                employees.list.map((emp, idx) => 
                    `<tr>
                        <td>${idx+1}</td>
                        <td>${emp.name}</td>
                        <td>${emp.age}</td>
                        <td>${emp.department}</td>
                    </tr>`
                ).join("")
            }
        </table>
    `;
    
    document.querySelector('#content').innerHTML = output;

}