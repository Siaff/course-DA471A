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

class Basket {
	constructor() {
		this.items = [];
	}
	add(item) {
		this.items.push(item);
	}
	update() {
		// Write out all items in basket and total price of all items in basket in the Varukorg div
		let basket = document.getElementById('Varukorg');
		basket.innerHTML = '';
		let title = document.createElement('h1');
		title.innerHTML = 'Varukorg';
		basket.appendChild(title);
		let total = 0;
		for (let i = 0; i < this.items.length; i++) {
			let item = document.createElement('p');
			item.innerHTML = this.items[i].name + ' ' + this.items[i].price + ' kr';
			basket.appendChild(item);

			total += this.items[i].price;
		}
		let totalPrice = document.createElement('p');
		totalPrice.innerHTML = 'Totalt: ' + total + ' kr';
		basket.appendChild(totalPrice);
	}
	get() {
		return this.items;
	}
}
class NewProduct {
	constructor(name, price, kategori) {
		this.name = name;
		this.price = Number(price);
		this.kategori = kategori;
	}
	update() {
		// Add new product to the correct category and update the category with class="button button1"
		let newProduct = new Product(this.name, this.price);
		if (this.kategori == 'Lask') {
			lask.add(newProduct);
			let cat = document.getElementById('LaskDIV');
			let button = document.createElement('button');
			button.innerHTML = this.name;
			button.className = 'button button1';
			button.onclick = function () {
				addToBasket(newProduct);
			};
			cat.appendChild(button);
		}
		if (this.kategori == 'Alkohol') {
			alcohol.add(newProduct);
			let cat = document.getElementById('AlkoholDIV');
			let button = document.createElement('button');
			button.innerHTML = this.name;
			button.className = 'button button1';
			button.onclick = function () {
				addToBasket(newProduct);
			};
			cat.appendChild(button);
		}
		if (this.kategori == 'coldDrinks') {
			coldDrinks.add(newProduct);
			let cat = document.getElementById('KalltDIV');
			let button = document.createElement('button');
			button.innerHTML = this.name;
			button.className = 'button button1';
			button.onclick = function () {
				addToBasket(newProduct);
			};
			cat.appendChild(button);
		}
		if (this.kategori == 'snacks') {
			snacks.add(newProduct);
			let cat = document.getElementById('SnacksDIV');
			let button = document.createElement('button');
			button.innerHTML = this.name;
			button.className = 'button button1';
			button.onclick = function () {
				addToBasket(newProduct);
			};
			cat.appendChild(button);
		}
	}
	get() {
		return this.items;
	}
}

let lask = new Lista();
let alcohol = new Lista();
let coldDrinks = new Lista();
let snacks = new Lista();
let basket = new Basket();

let lask1 = new Product('Coca Cola', 25);
let lask2 = new Product('Fanta', 23);
let lask3 = new Product('Sprite', 21);
let lask4 = new Product('Loka', 26);

let alkohol1 = new Product('Carlsberg', 50);
let alkohol2 = new Product('Tuborg', 58);
let alkohol3 = new Product('Heineken', 54);
let alkohol4 = new Product('Corona', 70);

let kallt1 = new Product('Milkshake Choklad', 110);
let kallt2 = new Product('Milkshake Vanilj', 121);
let kallt3 = new Product('Milkshake Jordgubb', 130);
let kallt4 = new Product('Milkshake Banan', 99);

let snacks1 = new Product('Chips', 10);
let snacks2 = new Product('Kex', 5);
let snacks3 = new Product('Nötter', 30);
let snacks4 = new Product('Choklad', 15);

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

function addToBasket(product) {
	basket.add(product);
	console.log(basket.get());
}

function visaVarukorg() {
	basket.update();
	console.log('Visar: ', basket.get());
}

function addNewProduct() {
	let name = document.getElementById('Namn').value;
	let price = document.getElementById('Pris').value;
	let kategori = document.getElementById('Kategori').value;
	console.log(name, price, kategori);
	let newProduct = new NewProduct(name, price, kategori);
	newProduct.update();
	console.log(newProduct.get());
}

function searchProduct() {
	// Add listener element to search bar and search for product in all categories
	let search = document.getElementById('search').value;
	let searchResult = document.getElementById('searchResult');
	searchResult.innerHTML = '';
	let title = document.createElement('h1');
	title.innerHTML = 'Sökresultat';
	searchResult.appendChild(title);
	let total = 0;
	for (let i = 0; i < lask.list.length; i++) {
		if (lask.list[i].name == search) {
			let item = document.createElement('p');
			item.innerHTML = lask.list[i].name + ' ' + lask.list[i].price + ' kr';
			searchResult.appendChild(item);
			total += lask.list[i].price;
			let res = snacks.list[i];
			basket.add(res);
		}
	}
	for (let i = 0; i < alcohol.list.length; i++) {
		if (alcohol.list[i].name == search) {
			let item = document.createElement('p');
			item.innerHTML = alcohol.list[i].name + ' ' + alcohol.list[i].price + ' kr';
			searchResult.appendChild(item);
			total += alcohol.list[i].price;
			let res = snacks.list[i];
			basket.add(res);
		}
	}
	for (let i = 0; i < coldDrinks.list.length; i++) {
		if (coldDrinks.list[i].name == search) {
			let item = document.createElement('p');
			item.innerHTML = coldDrinks.list[i].name + ' ' + coldDrinks.list[i].price + ' kr';
			searchResult.appendChild(item);
			total += coldDrinks.list[i].price;
			let res = snacks.list[i];
			basket.add(res);
		}
	}
	for (let i = 0; i < snacks.list.length; i++) {
		if (snacks.list[i].name == search) {
			let item = document.createElement('p');
			item.innerHTML = snacks.list[i].name + ' ' + snacks.list[i].price + ' kr';
			searchResult.appendChild(item);
			total += snacks.list[i].price;
			let res = snacks.list[i];
			basket.add(res);
		}
	}
	let totalSum = document.createElement('p');
	totalSum.innerHTML = 'Totalt: ' + total + ' kr';
	searchResult.appendChild(totalSum);
}
