const wraper_products_elem = document.querySelector('.wraper_products');
let products = [];

const cardsRender = () => {
	const productsContainer = document.querySelector('.products_container');
	productsContainer.innerText = '';

	products.forEach(({ photo, product_name, product_code, price, amount }) => {
		const product_card = document.createElement('div');
		product_card.classList.add('product-card');
		const photo_elem = document.createElement('img');
		photo_elem.classList.add('photo');
		const product_nameElem = document.createElement('p');
		const product_codeElem = document.createElement('p');
		const priceElem = document.createElement('p');
		const amountElem = document.createElement('p');

		photo_elem.setAttribute('src', photo);
		product_nameElem.innerText = `Наименование: ${product_name}`;
		product_codeElem.innerText = `Артикул: ${product_code}`;
		priceElem.innerText = `Стоимость: ${price * 1.5}`;
		amountElem.innerText = `Количество на складе: ${amount}`;

		product_card.append(
			photo_elem,
			product_nameElem,
			product_codeElem,
			priceElem,
			amountElem
		);
		productsContainer.append(product_card);
	});
};
wraper_products_elem.addEventListener('submit', (event) => {
	event.preventDefault();
	const { photo, product_name, product_code, price, amount } = event.target;
	products.push({
		photo: photo.value,
		product_name: product_name.value,
		product_code: product_code.value,
		price: price.value,
		amount: amount.value,
	});
	photo.value = '';
	product_name.value = '';
	product_code.value = '';
	price.value = '';
	amount.value = '';
	cardsRender();
});
