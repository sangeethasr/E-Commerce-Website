

// ACCOUNT PAGE - TOGGLE FORM //

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const indicator = document.getElementById("indicator");

function viewRegisterForm(){
    loginForm.style.transform = "translateX(0px)";
    registerForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(50px)";
}

function viewLoginForm(){
    loginForm.style.transform = "translateX(330px)";
    registerForm.style.transform = "translateX(330px)";
    indicator.style.transform = "translateX(-50px)";
}

// CREATE AN ACCOUNT IN THE E-COMMERCE SITE //

var loginBtn = document.getElementById("loginBtn")

loginBtn.addEventListener('click', ()=> {
    window.alert("working");
});