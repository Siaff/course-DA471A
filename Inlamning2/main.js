class Lista {
    constructor() {
        this.list = [];
    }
    add(item) {
        this.list.push(item);
    }
    get() {
        return this.list;
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// create a basket class
class Basket {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    get() {
        return this.items;
    }
}
class NewProduct {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    update(item) {
        // Make a new button for new item in basket
        this.items.push(item);
        let newButton = document.createElement('button');
        newButton.innerHTML = item.name;
        newButton.setAttribute('class', 'btn btn-primary');
        newButton.setAttribute('id', item.name);
        newButton.setAttribute('onclick', 'removeFromBasket(this)');
        // Add button to basket
        let basket = document.getElementById('basket');
        basket.appendChild(newButton);
    }
    get() {
        return this.items;
    }
}

let lask = new Lista();
let alcohol = new Lista();
let coldDrinks = new Lista();
let snacks = new Lista();

let lask1 = new Product('Coca Cola', 20);
let lask2 = new Product('Fanta', 20);
let lask3 = new Product('Sprite', 20);
let lask4 = new Product('Loka', 20);

let alkohol1 = new Product('Carlsberg', 20);
let alkohol2 = new Product('Tuborg', 20);
let alkohol3 = new Product('Heineken', 20);
let alkohol4 = new Product('Corona', 20);

let kallt1 = new Product('Milkshake Choklad', 20);
let kallt2 = new Product('Milkshake Vanilj', 20);
let kallt3 = new Product('Milkshake Jordgubb', 20);
let kallt4 = new Product('Milkshake Banan', 20);

let snacks1 = new Product('Chips', 20);
let snacks2 = new Product('Kex', 20);
let snacks3 = new Product('Nötter', 20);
let snacks4 = new Product('Kexchoklad', 20);

lask.add(lask1);
lask.add(lask2);
lask.add(lask3);
lask.add(lask4);

alcohol.add(alkohol1);
alcohol.add(alkohol2);
alcohol.add(alkohol3);
alcohol.add(alkohol4);

coldDrinks.add(kallt1);
coldDrinks.add(kallt2);
coldDrinks.add(kallt3);
coldDrinks.add(kallt4);

snacks.add(snacks1);
snacks.add(snacks2);
snacks.add(snacks3);
snacks.add(snacks4);

// get inner html element for cola and add event listener
let cola = document.getElementById('Cola');
cola.addEventListener('click', function () {
    let basket = new Basket();
    basket.add(lask1);
    console.log(basket.get());
});

function addToBasket(product) {
    let basket = new Basket();
    basket.add(product);
    console.log(basket.get());
}
