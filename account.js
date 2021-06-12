

// ACCOUNT PAGE - TOGGLE FORM //

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const indicator = document.getElementById("indicator");

function viewRegisterForm() {
    loginForm.style.transform = "translateX(0px)";
    registerForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(50px)";
}

function viewLoginForm() {
    loginForm.style.transform = "translateX(330px)";
    registerForm.style.transform = "translateX(330px)";
    indicator.style.transform = "translateX(-50px)";
}


// Function to show the toast //

var toast = document.getElementById("snackbar");

function showToast() {
    toast.className = "show";
    setTimeout(function () { toast.className = toast.className.replace("show", ""); }, 3000);
}


// CREATE AN ACCOUNT IN THE E-COMMERCE SITE //

var registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener('click', (e) => {

    e.preventDefault();

    // fetching data from form //
    var registerEmail = document.getElementById("registerEmail").value;
    var registerPassword = document.getElementById("registerPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var length = registerPassword.length;

    // password conformation //

    if (registerEmail == null || registerEmail == "" && registerPassword == null || registerPassword == "") {
        toast.innerHTML = "Please Fill All Required Field";
    }
    else if (!registerEmail.includes("@")) {
        toast.innerHTML = "Please add a proper email";
    }
    else if (registerPassword != confirmPassword) {

        toast.innerHTML = "Passwords doesn't match";

    }
    else if (length <= 5) {

        toast.innerHTML = "Password must contain 6 characters";

    }

    else {

        var index;
        var flag = 0;

        for (index = 0; index < length; index++) {
            var text = registerPassword.charCodeAt(index)
            if (text < 65 && text > 32) {
                flag = 1;
            }
        }

        if (flag != 1) {
            toast.innerHTML = "Password must contain special characters";
        } else {

            addtoFirebase();
        }
    }

    showToast();
});




// email and password added to firebase authentication api //

function addtoFirebase() {

    var registerEmail = document.getElementById("registerEmail").value;
    var registerPassword = document.getElementById("registerPassword").value;

    // passing data to the sign up REST API as an object //

    const data = { email: registerEmail, password: registerPassword };

    console.log(data);
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCZ7Q99gdBmy5n2gJzbwPs8dPnBz7u_zUU', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .then(signupResponse => {

            console.log(signupResponse);

            if (signupResponse.error != null) {

                console.error(signupResponse.error);

                var errorCode = signupResponse.error.message;
                if (errorCode == "EMAIL_EXISTS") {
                    toast.innerHTML = "Email already exists";
                }
                else {
                    toast.innerHTML = signupResponse.error.message;
                }
            }
            else {

                // adding the key value pairs in login response into localstorage //
                
                localStorage.setItem('userId', signupResponse.localId);
                localStorage.setItem('idToken', signupResponse.idToken);
                localStorage.setItem('refreshToken', signupResponse.refreshToken);

                // ------------------------------------------------------------- //

                toast.innerHTML = "Logged In";

                window.location.href = "index.html";

                loginFunction();

            }

        })
        .catch(error => {
            console.error('catch : ', error);
            toast.innerHTML = error;
        })

    showToast();
}



// SET UP USER LOG IN FUNCTION //

var loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener('click', (e) => {

    e.preventDefault();

    var loginEmail = document.getElementById("loginEmail").value;
    var loginPassword = document.getElementById("loginPassword").value;

    const logindata = { email: loginEmail, password: loginPassword };

    console.log(logindata);
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCZ7Q99gdBmy5n2gJzbwPs8dPnBz7u_zUU', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(logindata)
    })
        .then(response => {
            return response.json();
        })
        .then(loginResponse => {

            console.log(loginResponse);

            if (loginResponse.error != null) {

                console.log(loginResponse.error);
                var errorCode = loginResponse.error.message;
                toast.innerHTML = errorCode;

            }

            if (loginResponse.registered == true) {

                // adding the key value pairs in login response into localstorage //
                
                    localStorage.setItem('userId', loginResponse.localId);
                    localStorage.setItem('idToken', loginResponse.idToken);
                    localStorage.setItem('refreshToken', loginResponse.refreshToken);

                // ------------------------------------------------------------- //

                toast.innerHTML = "Logged In";

                window.location.href = "index.html";

                loginFunction();
            }

        })
        .catch(error => {
            console.error('catch : ', error);
            toast.innerHTML = error;

        })

    showToast();

})



// Helps to keep the logged in user status //

function loginFunction() {

    var user = localStorage.getItem('userId');

    if (user != null) {

        // added data into local storage as key value pairs //

        localStorage.setItem('accountSection', 'none');
        localStorage.setItem('logoutSection', 'block');

    }
}


// function which is used to set the display of logout page when load a page //

window.onload = function () {

    var logoutPage = document.getElementById("logoutPage");
    var accountPage = document.getElementById("accountPage");

    var accountSection = localStorage.getItem('accountSection');
    var logoutSection = localStorage.getItem('logoutSection');

    accountPage.style.display = accountSection;

    logoutPage.style.display = logoutSection;
}


// LOGOUT FUNCTION //

var logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener('click', () => {
    localStorage.clear();
    window.location.reload();
})

var noLogoutBtn = document.getElementById("noLogoutBtn");

noLogoutBtn.addEventListener('click', () => {
    window.location.href = "index.html";
})