class GoodsItem {
    constructor(title, price, image = 'img/pc.jpg') {
        this.title = title;
        this.price = price;
        this.image = image;
    }
    render() {
        return `<div class="goods-item">
        <img src=${this.image}>
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="buy-btn">Купить</button>
    </div>`

    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ]
    }

    // 2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
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
            const goodItem = new GoodsItem(good.title, good.price);
            listHTML += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHTML;
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
alert(list.getSum());

// 1. Добавьте пустые классы для корзины товаров и элемента корзины товаров.
// Продумайте, какие методы понадобятся для работы с этими сущностями.

class CartItem {
    constructor(good, count) {
        this.good = good;
        this.count = count;
    }
    addCount() { }   //увеличить количество
    removeCount() { }    //уменшить количество

}
class CartList {
    constructor() {
        this.carts = [];
    }
    addCartItem() { }    //добавление в корзину
    removeCartItem() { } //удаление из корзины

}