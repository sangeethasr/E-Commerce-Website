

// // ITEMS ADDING INTO CART //

// function addItemToCart(n) {

//     var cartTable = document.getElementById("cartTable");

//     // All elements to be added //

//     var tableRow = document.createElement("tr");
//     tableRow.id = cartList[n].removeid;

//     var x = cartList[n].removeid;

//     var tableData1 = document.createElement("td");
//     var cartInfo = document.createElement("div");
//     cartInfo.className = "cart-info";

//     var productImage = document.createElement("img");

//     var tableDiv = document.createElement("div");
//     var product = document.createElement("p");
//     var price = document.createElement("small");
//     var button = document.createElement("a");
//     button.className = "RemoveFromCart";
//     button.id = cartList[n].id;

//     var y = cartList[n].id;
    

//     var tableData2 = document.createElement("td");
//     var quantity = document.createElement("input");

//     var tableData3 = document.createElement("td");


//     // Push elements into HTML //

//     cartTable.appendChild(tableRow);

//     tableRow.appendChild(tableData1);

//     tableData1.appendChild(cartInfo);


//     cartInfo.appendChild(productImage);
//     cartInfo.appendChild(tableDiv);

//     tableDiv.appendChild(product);
//     tableDiv.appendChild(price);
//     tableDiv.appendChild(button);


//     tableRow.appendChild(tableData2);
//     tableData2.appendChild(quantity)

//     tableRow.appendChild(tableData3);

//     // Edit pushed elements info from array //

//     productImage.src = cartList[n].image;
//     product.innerHTML = cartList[n].name;
//     price.innerHTML = '$' + cartList[n].price;
//     button.innerHTML = 'remove';

//     quantity.type = "number";
//     quantity.value = cartList[n].quantity;

//     tableData3.innerHTML = '$' + cartList[n].price;

//     addToArray(x, y);    
// }

// var idarray =[];
// var tablearray =[];

// function addToArray(x, y){

//     idarray.push(y);
//     tablearray.push(x);
//     removeItemFromCart(idarray,tablearray);
// }

// function removeItemFromCart(deletearray, deleteitemarray){
//     var cartTable = document.getElementById("cartTable");

//     deletearray.forEach((deleteid) => {
//         deleteitemarray.forEach((deletechild) => {
            
//             document.getElementById(deleteid).addEventListener('click', () => {

//                 var child = document.getElementById(deletechild);
//                 cartTable.removeChild(child);
//                 delete deletearray[deleteid];
//                 delete deleteitemarray[deletechild];

//             });
//         });
//     });
// }


// function totalAmount(count) {

//     // To find the length of array of objects //
//     // objectLenght = Object.keys(cartList).length;

//     var subTotal = document.getElementById("subTotal");
//     var tax = document.getElementById("tax");
//     var totalPrice = document.getElementById("totalPrice");

//     var TST = 0;

//     for (var i = 0; i < count; i++) {

//         var ST = cartList[i].quantity * cartList[i].price;
//         TST = TST + ST;
//     }


//     var T = TST * 0.15;
//     var TP = TST + T;

//     subTotal.innerHTML = '$' + TST;
//     tax.innerHTML = '$' + T;
//     totalPrice.innerHTML = '$' + TP;
// }



// var index = 0;

// var cartTest = document.getElementById("cartTest");

// cartTest.addEventListener('click', () => {

//     addItemToCart(index);
//     index++;
    
//     // calculate the total amount //

//     totalAmount(index);

// })