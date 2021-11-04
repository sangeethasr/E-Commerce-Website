import {BASIC_URL} from "./constants.js";
// console.log("BASIC_URL",BASIC_URL);

const params = new URLSearchParams(window.location.search);
const productid = params.get('productid');
console.log('productDetailsPage: ', productid);

var PDetailsimage = document.getElementById("PDetailsimage");
var PDetailsHeading = document.getElementById("PDetailsHeading");
var PDetailsPrice = document.getElementById("PDetailsPrice");

var addToCart = document.getElementById("addToCart");


// fetch details of a particular item from product list (firebase)//


fetch(BASIC_URL+'/productList.json', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
}).then(response => {
    return response.json();
}).then(inputDbResponse => {
    console.log(inputDbResponse);

    PDetailsimage.src = inputDbResponse[productid].image;
    PDetailsHeading.innerHTML = inputDbResponse[productid].name;
    PDetailsPrice.innerHTML = '$ ' + inputDbResponse[productid].price;

    const cimage = inputDbResponse[productid].image;
    const cname = inputDbResponse[productid].name;
    const cprice = inputDbResponse[productid].price;
    const cid = inputDbResponse[productid].id;

    addToCart.addEventListener('click', () => {
        additemstoFirebase(cimage, cname, cprice, productid, cid);
    });

}).catch(error => {
    console.error('catch : ', error);
})

// add items to cartlist //

function additemstoFirebase(cimage, cname, cprice, productid, cid) {

    var userid = localStorage.getItem('userId');
    var cquantity = document.getElementById("PDetailsQuantity").value;
    console.log(cquantity);

    if (userid !== null && cquantity !== "0") {

        const cartdata = {id: cid, image: cimage, name: cname, price: cprice, quantity: cquantity };

        fetch(BASIC_URL+'/cartList/' + userid + '/' + productid + '.json', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartdata)
        }).then(response => {
            return response.json();
        }).then(cartdbresponse => {
            console.log(cartdbresponse);
            window.location.href = "cart.html";
        }).catch(error => {
            console.error('catch : ', error);
        })
    }else{

        var warning = document.getElementById("warning");
        if(userid === null){
            warning.innerHTML = "PLEASE LOGIN";
        }else if(cquantity === "0"){
            warning.innerHTML = "PLEASE ADD ANY QUANTITY";
        }
        
        var popupContainer = document.getElementById("popupContainer");
        popupContainer.style.display = "flex";
        var closepopup = document.getElementById("closepopup");
        closepopup.addEventListener('click', () => {popupContainer.style.display = "none"});
    }
}