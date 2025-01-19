const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const loginButton = document.querySelector("#login-button");
const greetings = document.querySelector("#greeting");


function onLoginSubmit (event){
    loginForm.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem("username",username);
    paintGreetings(username);
}

function paintGreetings(username){

    greetings.innerText = 'Hello, ${username}';
    loginForm.classList.remove("hidden");
}

const savedUsername = localStorage.getItem("username");

if (savedUserName === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    paintGreetings(savedUsername);
}
