import {BASIC_URL} from "./constants.js";
console.log("BASIC_URL",BASIC_URL);

fetchCartList();

function fetchCartList() {
  var userid = localStorage.getItem("userId");

  fetch(
    BASIC_URL+"/cartList/" +
      userid +
      ".json",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((cartDbResponse) => {
      console.log(cartDbResponse);

      createCartList(cartDbResponse, userid);
    });
}

// LISTING ITEMS FROM FIREBASE CARTLIST //

function createCartList(cartDbResponse, userid) {
  if (cartDbResponse) {
    const keyArray = Object.keys(cartDbResponse);
    length = keyArray.length;
    console.log(keyArray);

    if (length !== 0) {
      var cartEmpty = document.getElementById("cartEmpty");
      var cartItems = document.getElementById("cartItems");
      cartEmpty.style.display = "none";
      cartItems.style.display = "block";

      for (var n = 0; n < length; n++) {
        var id = keyArray[n];

        var cartTable = document.getElementById("cartTable");

        // All elements to be added //

        var tableRow = document.createElement("tr");

        var tableData1 = document.createElement("td");
        var cartInfo = document.createElement("div");
        cartInfo.className = "cart-info";

        var productImage = document.createElement("img");

        var tableDiv = document.createElement("div");
        var product = document.createElement("p");
        var price = document.createElement("small");
        var button = document.createElement("a");
        button.className = "RemoveFromCart";
        button.id = id;
        tableRow.className = id;

        button.addEventListener("click", (e) => {
          console.log("clicked :", e.target.id);

          fetch(
            BASIC_URL+"/cartList/" +
              userid +
              "/" +
              e.target.id +
              ".json",
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
            .then((response) => {
              return response.json();
            })
            .then((deleteDbResponse) => {
              console.log(deleteDbResponse);
              removeAllChildNodes(cartTable);
              fetchCartList();
            });
        });

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
        tableData2.appendChild(quantity);

        tableRow.appendChild(tableData3);

        // Edit pushed elements info from array //

        productImage.src = cartDbResponse[id].image;
        product.innerHTML = cartDbResponse[id].name;
        price.innerHTML = "$" + cartDbResponse[id].price;
        button.innerHTML = "remove";

        quantity.type = "number";
        quantity.value = cartDbResponse[id].quantity;

        tableData3.innerHTML = "$" + cartDbResponse[id].price;

        // to find the total price of the items in cart //

        totalAmount(cartDbResponse, keyArray);

        // remove item from cart list //
      }
    }
  }
}

function removeAllChildNodes(cartTable) {
  while (cartTable.children[1]) {
    cartTable.removeChild(cartTable.children[1]);
  }

  var cartEmpty = document.getElementById("cartEmpty");
  var cartItems = document.getElementById("cartItems");
  cartEmpty.style.display = "block";
  cartItems.style.display = "none";
}

function totalAmount(cartdata, keyArray) {
  var l = keyArray.length;

  var subTotal = document.getElementById("subTotal");
  var tax = document.getElementById("tax");
  var totalPrice = document.getElementById("totalPrice");

  var TST = 0;

  for (var i = 0; i < l; i++) {
    var x = keyArray[i];

    var ST = cartdata[x].quantity * cartdata[x].price;
    TST = TST + ST;
  }

  var T = TST * 0.15;
  var TP = TST + T;

  subTotal.innerHTML = "$" + TST;
  tax.innerHTML = "$" + T.toFixed(2);

  totalPrice.innerHTML = "$" + TP.toFixed(2);
}
