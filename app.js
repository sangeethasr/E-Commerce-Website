 
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

