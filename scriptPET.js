const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
let name = document.querySelector("#name")
let login = document.querySelector("#login")
let password = document.querySelector("#password")
let submit = document.querySelector('#submit')

let users = {};

function User(name, login, password){
    this.name = name;
    this.login = login;
    this.password = password;
}

function createId(users){
    return Object.keys(users).length;
}

submit.addEventListener('click', () =>{
    const nameUser = name.value;
    const loginUser = login.value;
    const passwordUser = password.value;

    const user = new User(nameUser, loginUser, passwordUser)

    const userId = 'User' + createId(users);

    console.log(users);
});

registerBtn.addEventListener('click',()=>{
    container.classList.add('active');
});

loginBtn.addEventListener('click',()=>{
    container.classList.remove('active');
});
