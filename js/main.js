const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
class GoodsItem {
    constructor(title, price, image = 'img/pc.jpg') {
        this.product_name = title;
        this.price = price;
        this.image = image;
    }
    render() {
        return `<div class="goods-item">
        <img src=${this.image}>
        <h3>${this.product_name}</h3>
        <p>${this.price}</p>
        <button class="buy-btn">Купить</button>
    </div>`

    }
}

class GoodsList {
    constructor() {
        this.goods = [];
        this._makeGETRequest()
            .then(data => {
                this.goods = data;
                this.render();
            });
    }

    // 1. Переделайте makeGETRequest() так, чтобы она использовала промисы.
    _makeGETRequest(url = `${API_URL}/catalogData.json`) {
        return fetch(url)
            .then(response => response.json())
    }

    getSum() {
        let sum = 0;
        this.goods.forEach(function (item) {
            sum += item.price;
        })
        return sum;

    }
    render() {
        let listHTML = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHTML += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHTML;
    }
}

class CartItem {
    constructor(product_name, price, quantity) {
        this.product_name = product_name;
        this.price = +price;
        this.quantity = quantity;
        this.amount = this.price * this.quantity;
    }

    render() {
        return `<div class="cart-item">
        <div><p class='cart-item-title'>${this.product_name}</p>
        <p class='cart-item-price'>Цена: ${this.price}</p>
        <p class='cart-item-quantity'>Количество: ${this.quantity}</p></div>
        <p class='cart-item-amount'>${this.amount}</p>
        <button class="cart-item-del">X</button>
    </div>`

    }
    addCount() { }   //увеличить количество
    removeCount() { }    //уменшить количество
}

class CartList {
    constructor() {
        this.carts = [];
        this._makeGETRequest(`${API_URL}/getBasket.json`)
            .then(data => {
                this.carts = data.contents;
                this.render();
            });
    }

    _makeGETRequest(url = `${API_URL}/getBasket.json`) {
        return fetch(url)
            .then(response => response.json())
    }

    render() {
        let listHTML = '';
        this.carts.forEach(cart => {
            console.log(cart);
            const cartItem = new CartItem(cart.product_name, cart.price, cart.quantity);
            listHTML += cartItem.render();
        });
        document.querySelector('.cart').innerHTML = listHTML;
    }

    // 2. Добавьте в соответствующие классы методы добавления товара в корзину, удаления товара из корзины и получения списка товаров корзины.
    addCartItem() { }    //добавление в корзину
    removeCartItem() { } //удаление из корзины
    getCartList() { }

}

const list = new GoodsList();
const carts = new CartList();