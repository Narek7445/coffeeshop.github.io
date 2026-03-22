const productsGrid = document.querySelector('.products-grid');

let menu = {
    drinks : [
        {
            name: "Малиновый латте",
            cost: 470
        }
    ]
}

function createProductFrame(category){
    let product = document.createElement('div')

    product.innerHTML = `
        <div class="product-container">
            <img src="assets/products/rusberry-latte.jpg" alt="Картинка продукта" class="product-image">
            <p class="product-description">Малиновый латте</p>
            <p class="product-cost">470 ₽</p>
            <button class="product-addtocart">Добавить</button>
        </div>
    `

    document.querySelector('.products-grid').append(product);
}

function config(){
    configCategories();
}

function configCategories(){
    let categories = document.querySelector('#product-categories');
    let openCategories = document.querySelector('#categories-button');
    let closeCategories = document.querySelector('#close-categories');

    let defaultLeft = categories.style.left;
    let debounce = false;

    categories.style.left = '-50%';

    openCategories.addEventListener("click", ()=>{
        if (debounce) {return};
        debounce = true;
        
        categories.style.left = (categories.style.left == defaultLeft) ? '-50%' : defaultLeft;

        setTimeout(() => {
            debounce = false;
        }, 1000);
    })

    closeCategories.addEventListener('click',()=>{
        categories.style.left = '-50%';
    })
}

config();

for (let product in menu){
    console.log(menu[product]);
}