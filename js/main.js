const products = [
    { id: 1, title: 'Notebook', image: 'img/pc.jpg', price: 2000 },
    { id: 2, title: 'Mouse', image: 'img/pc.jpg', price: 20 },
    { id: 3, title: 'Keyboard', image: 'img/pc.jpg', price: 200 },
    { id: 4, title: 'Gamepad', image: 'img/pc.jpg', price: 50 },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (p) => {
    return `<div class="product-item">
                <img src=${p.image}>
                <h3>${p.title}</h3>
                <p>${p.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);