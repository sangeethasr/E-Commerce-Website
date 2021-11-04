var productIdList = [
  "product1",
  "product2",
  "product3",
  "product4",
  "product5",
  "product6",
  "product7",
  "product8",
  "product9",
  "product10",
  "product11",
  "product12",
  "product13",
];

productIdList.forEach((productId) => {
  var clikedProductId = document.getElementById(productId);
  if (clikedProductId) {
    clikedProductId.addEventListener("click", () => {
      upadateUrl(productId);
    });
  }
});

function upadateUrl(productId) {
  location.href =
    "http://127.0.0.1:5500/productDetailsPage.html" + "?productid=" + productId;
}
