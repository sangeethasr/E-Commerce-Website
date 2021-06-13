

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyCZ7Q99gdBmy5n2gJzbwPs8dPnBz7u_zUU",
//     authDomain: "ecommerce-project-efa9a.firebaseapp.com",
//     databaseURL: "https://ecommerce-project-efa9a-default-rtdb.firebaseio.com",
//     projectId: "ecommerce-project-efa9a",
//     storageBucket: "ecommerce-project-efa9a.appspot.com",
//     messagingSenderId: "827598023702",
//     appId: "1:827598023702:web:4637d287e9484a56d4d937",
//     measurementId: "G-6S6H9TVJGR"
//   };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();






// NAVBAR SECTION //

const menuItems = document.getElementById("menuItems");

menuItems.style.maxHeight = "0px";

function menuToggle(){
    if(menuItems.style.maxHeight != "0px" ){
        menuItems.style.maxHeight = "0px";
    }else{
        menuItems.style.maxHeight = "200px";
    }
}


//  FOOTER CREDITS //

var copyright = document.querySelectorAll(".copyright");

copyright[0].addEventListener('click', () => { window.location.href = "https://www.youtube.com/c/EasyTutorialsVideo" });

copyright[1].addEventListener('click', () => { window.location.href = "https://www.linkedin.com/in/sangeetha-rajan/"; });
