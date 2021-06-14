const params = new URLSearchParams(window.location.search);
const productid = params.get('productid');
console.log('productDetailsPage: ',productid);

var PDetailsimage = document.getElementById("PDetailsimage");
var PDetailsHeading = document.getElementById("PDetailsHeading");
var PDetailsPrice = document.getElementById("PDetailsPrice");

var addToCart = document.getElementById("addToCart");


// fetch details of a particular item from product list (firebase)//


fetch('https://ecommerce-project-efa9a-default-rtdb.firebaseio.com/productList.json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
}).then(response => {
    return response.json();
}).then(inputDbResponse =>{
    console.log(inputDbResponse);
    console.log(inputDbResponse[productid]);

    PDetailsimage.src = inputDbResponse[productid].image;
    PDetailsHeading.innerHTML = inputDbResponse[productid].name;
    PDetailsPrice.innerHTML = '$ '+inputDbResponse[productid].price;

    const cimage = inputDbResponse[productid].image;
    const cname = inputDbResponse[productid].name;
    const cprice = inputDbResponse[productid].price;

    addToCart.addEventListener('click', () => {
        additemstoFirebase(cimage, cname, cprice);
    });

}).catch(error => {
    console.error('catch : ', error);
})

