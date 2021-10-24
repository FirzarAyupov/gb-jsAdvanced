let cartBtn = document.querySelector('.btn-cart');
let cart = document.querySelector('.cart');

let cartList = document.createElement('div');

cartBtn.addEventListener('click', function () {
    cart.classList.toggle('cart-hide');
});