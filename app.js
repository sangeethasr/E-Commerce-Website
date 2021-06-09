

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCZ7Q99gdBmy5n2gJzbwPs8dPnBz7u_zUU",
    authDomain: "ecommerce-project-efa9a.firebaseapp.com",
    databaseURL: "https://ecommerce-project-efa9a-default-rtdb.firebaseio.com",
    projectId: "ecommerce-project-efa9a",
    storageBucket: "ecommerce-project-efa9a.appspot.com",
    messagingSenderId: "827598023702",
    appId: "1:827598023702:web:4637d287e9484a56d4d937",
    measurementId: "G-6S6H9TVJGR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();






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



// REDIRECTION FUNCTION //

function goToPage(){
    location.href = '/productDetailsPage.html';
}

// ADD AND REMOVE ITEMS FROM CART //

// const addToCart = document.getElementById("addToCart")

// addToCart.addEventListener('click', () => {
//     location.href = '/cart.html';
// });

// PRODUCT DB //

var productList = [
    {
        id:0,
        image: 'images/buy-1.jpg',
        name: 'Red T-Shirt',
        price: 200
    },

    {
        id:1,
        image: 'images/buy-2.jpg',
        name: 'shoe',
        price: 500
    },

    {
        id:2,
        image: 'images/buy-3.jpg',
        name: 'pant',
        price: 300
    }
]

