

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

var registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener('click', (e)=> {

    e.preventDefault();

    // fetching data from form //
    var registerEmail = document.getElementById("registerEmail").value;
    var registerPassword = document.getElementById("registerPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var Toast = document.getElementById("snackbar");
    var length = registerPassword.length;

    // password conformation //

    if(registerEmail == "" || registerEmail == null && registerPassword == "" || registerPassword == null){
        Toast.innerHTML = "Please Fill All Required Field";
    }
    else if(registerEmail.includes("@") == false){
        Toast.innerHTML = "Please add a proper email";
    }
    else if(registerPassword != confirmPassword){

        Toast.innerHTML = "Passwords doesn't match";

    }
    else if(length <= 5){

        Toast.innerHTML = "Password must contain 6 characters";

    }
    
    else{

        var index;
        var flag = 0;

        for(index =0 ; index < length ; index++){
            var text = registerPassword.charCodeAt(index)
            if(text < 65 && text > 32){
                flag = 1;
            }
        }

        if (flag != 1 ){
            Toast.innerHTML = "Password must contain special characters";
        }else{

            addtoFirebase();
        }
    }
    
    Toast.className = "show";
    setTimeout(function(){ Toast.className = Toast.className.replace("show", ""); }, 2000);

});




// email and password added to firebase authentication //

function addtoFirebase(){
    var registerEmail = document.getElementById("registerEmail").value;
    var registerPassword = document.getElementById("registerPassword").value;
    var Toast = document.getElementById("snackbar");

    // passing data to the sign up REST API as an object //

    const data = {email : registerEmail, password : registerPassword};

    console.log(data);
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCZ7Q99gdBmy5n2gJzbwPs8dPnBz7u_zUU' , {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(data)
    })
    .then(response => {
        return response.json();
    })
    .then(signupResponse => {
        console.log(signupResponse.error);

        var errorCode = signupResponse.error.message;
        if(errorCode == "EMAIL_EXISTS"){
            Toast.innerHTML = "Email already exists";
        }
        else{
            Toast.innerHTML = signupResponse.error.message;
        }

        Toast.className = "show";
        setTimeout(function(){ Toast.className = Toast.className.replace("show", ""); }, 2000);
    })
    .catch(error => {
       console.error('catch : ',error);
       Toast.innerHTML = error;

       Toast.className = "show";
       setTimeout(function(){ Toast.className = Toast.className.replace("show", ""); }, 2000);
    })
}