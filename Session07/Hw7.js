const context = {
    users: null,
}
const obj = {
    employee_age: "19",
    employee_name: "Cristian Su",
    employee_salary: "100000$",
    id: "20184246",
    profile_image: "",
}
window.onload = async () => {
  await getUs();
  getName();
  mouseover();

}
const getUs = async () => {
 const usersAPI = await fetch('http://dummy.restapiexample.com/api/v1/employees')
 const userss = await usersAPI.json();
 context.users = userss;
 console.log(usersAPI);
 console.log(userss);
 console.log(userss[0]);
}
let insert = document.getElementById('list-employees');
const getName = () => {
    for (let i=0;i<10;i++){
        insert.innerHTML += `<li id="li-${i}"> ${context.users[i].employee_name} </li>`
    }
}
const mouseover = () => {
    for (let i = 0; i<10;i++){
    document.getElementById(`li-${i}`).addEventListener('mouseover', function(){
let x = document.getElementById(`li-${i}`);
let salary = context.users[i].employee_salary;
document.getElementById('employee_salary').innerText = `Employee salary: ${salary}`;
    })
}
}
const post = () => {
    
}

// post('http://dummy.restapiexample.com/api/v1/employees', function(){
//       document.getElementById('button').addEventListener('click', function(){
// userss.push(obj);
//       })
//   })
