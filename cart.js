// CART ARRAY //

var cartList = [
    {
        id:0,
        image: 'images/buy-1.jpg',
        name: 'Red T-Shirt',
        price: 200,
        quantity: 3
    },

    {
        id:1,
        image: 'images/buy-2.jpg',
        name: 'shoe',
        price: 500,
        quantity: 1
    },

    {
        id:2,
        image: 'images/buy-3.jpg',
        name: 'pant',
        price: 300,
        quantity: 1
    }
]


// ITEMS ADDING INTO CART //

function addItemToCart(){

    const cartTable = document.getElementById("cartTable");

    // All elements to be added //

    var tableRow = document.createElement("tr");
    tableRow.id = "tableRow";

    var tableData1 = document.createElement("td");
        var cartInfo = document.createElement("div");
        cartInfo.className = "cart-info";

        var productImage = document.createElement("img");

        var tableDiv = document.createElement("div");
            var product = document.createElement("p");
            var price = document.createElement("small");
            var button = document.createElement("a");
            button.className = "RemoveFromCart";
    
    var tableData2 = document.createElement("td");
        var quantity = document.createElement("input");

    var tableData3 = document.createElement("td");


    // Push elements into HTML //

    cartTable.appendChild(tableRow);

    tableRow.appendChild(tableData1);
 
            tableData1.appendChild(cartInfo);


                cartInfo.appendChild(productImage);
                cartInfo.appendChild(tableDiv);

                    tableDiv.appendChild(product);
                    tableDiv.appendChild(price);
                    tableDiv.appendChild(button);
        

    tableRow.appendChild(tableData2);
        tableData2.appendChild(quantity)

    tableRow.appendChild(tableData3);

    // Edit pushed elements info from array //

    productImage.src = cartList[0].image;
    product.innerHTML = cartList[0].name;
    price.innerHTML = '$' + cartList[0].price;
    button.innerHTML = 'remove';

    quantity.type = "number";
    quantity.value = cartList[0].quantity;
    
    tableData3.innerHTML = '$' + cartList[0].price;
}

addItemToCart();


// calculate the total amount //

var ST = cartList[0].quantity * cartList[0].price;
var T = ST * 0.15;
var TP = ST + T;

var subTotal = document.getElementById("subTotal");
var tax = document.getElementById("tax");
var totalPrice = document.getElementById("totalPrice");

subTotal.innerHTML = '$' + ST;
tax.innerHTML = '$' + T;
totalPrice.innerHTML = '$' + TP;
