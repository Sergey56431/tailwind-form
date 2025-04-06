let loginForm = document.querySelector('#loginForm');
let signUpForm = document.querySelector('#signUpForm');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let passwordRepeat = document.querySelector('#passwordRepeat');
let btn = document.querySelector('#btn');

if(window.location.href.includes('login.html')){
    btn.addEventListener('click', login);
    console.log('login');
} else  {
    btn.addEventListener('click', signUp);
    console.log('signup');
}

function signUp() {
    const fields = [name, email, password, passwordRepeat];
    if (checkFields(fields)) {
        saveUserInfo(fields);
        signUpForm.reset();
        alert('Вы успешно зарегистрировались');
        window.location.href = 'login.html';
    }
}

function saveUserInfo(fields) {
    const user = {
        name: fields[0].value,
        email: fields[1].value,
        password: fields[2].value,
    }
    const users = getAllUsers()
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

function getAllUsers() {
    return localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
}

function getUserInfo(name, password) {
    const users = getAllUsers();
    if (users.length > 0) {
        return users.find(item => item.email === name && item.password === password);
    } else {
        return null;
    }
}

function checkFields(fields) {
    let isValid = true;
    fields.forEach(field => {
        if (field.value === '') {
            field.classList.add('border-solid', 'border', 'border-red-500')
            field.nextElementSibling.classList.remove('hidden')
            field.nextElementSibling.classList.add('block')
            field.nextElementSibling.innerText = 'Заполните поле';
            isValid = false;
        }
        else {
            field.classList.remove('border-solid', 'border', 'border-red-500')
            field.nextElementSibling.classList.remove('block')
            field.nextElementSibling.classList.add('hidden')
            isValid = true;
        }
    })
    return isValid;
}

function login() {
    const fields = [email, password];
    if (checkFields(fields)) {
        let user = getUserInfo(fields[0].value, fields[1].value);
        if (user) {
            loginForm.reset();
            alert(`${user.name}, вы успешно вошли в аккаунт}`);
        } else {
            alert('Неверный email или пароль');
        }
    }

}