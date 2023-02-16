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
		this.price = price;
		this.kategori = kategori;
	}
	update() {
		// Add new product to the correct category and update the category with class="button button1"
		let newProduct = new Product(this.name, this.price);
		if (this.kategori == 'Lask') {
			lask.add(newProduct);
			let button = document.getElementById('Lask');
			button.className = 'button button1';
		}
		if (this.kategori == 'Alkohol') {
			alcohol.add(newProduct);
			let button = document.getElementById('Alkohol');
			button.className = 'button button1';
		}
		if (this.kategori == 'coldDrinks') {
			coldDrinks.add(newProduct);
			let button = document.getElementById('Kallt');
			button.className = 'button button1';
		}
		if (this.kategori == 'snacks') {
			snacks.add(newProduct);
			let button = document.getElementById('Snacks');
			button.className = 'button button1';
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
	// Create a search function for the products
	let search = document.getElementById('search').value;
	let searchResult = document.getElementById('searchResult');
	searchResult.innerHTML = '';
	let searchList = [];
	for (let i = 0; i < lask.get().length; i++) {
		if (lask.get()[i].name.includes(search)) {
			searchList.push(lask.get()[i]);
		}
	}
	for (let i = 0; i < alcohol.get().length; i++) {
		if (alcohol.get()[i].name.includes(search)) {
			searchList.push(alcohol.get()[i]);
		}
	}
	for (let i = 0; i < coldDrinks.get().length; i++) {
		if (coldDrinks.get()[i].name.includes(search)) {
			searchList.push(coldDrinks.get()[i]);
		}
	}
	for (let i = 0; i < snacks.get().length; i++) {
		if (snacks.get()[i].name.includes(search)) {
			searchList.push(snacks.get()[i]);
		}
	}
	for (let i = 0; i < searchList.length; i++) {
		let item = document.createElement('p');
		item.innerHTML = searchList[i].name + ' ' + searchList[i].price + ' kr';
		searchResult.appendChild(item);
	}
}
