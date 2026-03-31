window.addEventListener('DOMContentLoaded', () => {
    show();
})

const data_url = 'http://127.0.0.1:5500/javascript/13.asyncronuos/employees.json';

const getJson = async () => {
    let response = await fetch(data_url);
    return response.json();
}

const show = async () => {
    let jsonData = await getJson();
    console.log('jsonData => ', jsonData);

    let output = `
        <h1>${jsonData.title}</h1>
        <table border=1>
            <tr>
                <th>NO</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>DEPARTMENT</th>
            </tr>
            ${  //자바스크립트 코드
                
                jsonData.list.map((emp, idx) => 
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
    // console.log(output);
    
    document.querySelector('#content').innerHTML = output;

}