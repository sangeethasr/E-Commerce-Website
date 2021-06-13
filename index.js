
var productIdList = ["product1", "product2", "product3", "product4", "product5", "product6", "product7", "product8", "product9", "product10", "product11", "product12", "product13"];

productIdList.forEach((productId) => {

    document.getElementById(productId).addEventListener('click', () => {
        localStorage.setItem('productId', productId);
        location.href = '/productDetailsPage.html';
    });
});