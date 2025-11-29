document.addEventListener('DOMContentLoaded', solve);

function solve() {
	let cartProducts = new Set();
	let totalPrice = 0;

	const allProductsEls = document.querySelectorAll('.product');
	const textareaOutputEl = document.querySelector('textarea');
	const checkoutBtnEl = document.querySelector('.checkout');

	for (const productEl of allProductsEls) {
		const addBtn = productEl.querySelector('.add-product');
		addBtn.addEventListener('click', handleAddProduct);
	}

	function handleAddProduct(e) {
		const productDivEl = e.target.parentElement.parentElement.querySelector('.product-title');
		const priceDivEl = e.target.parentElement.parentElement.querySelector('.product-line-price');
		console.log(productDivEl.textContent);
		
		const productName = productDivEl.textContent;
		const price = Number(priceDivEl.textContent);

		cartProducts.add(productName);
		totalPrice += price;
		textareaOutputEl.value += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`
	}

	checkoutBtnEl.addEventListener('click', handleCheckout);

	function handleCheckout(e) {
		const productsArr = Array.from(cartProducts);
		textareaOutputEl.value += `You bought ${productsArr.join(', ')} for ${totalPrice.toFixed(2)}.`
		checkoutBtnEl.disabled = true;

		for (const productEl of allProductsEls) {
			const addBtn = productEl.querySelector('.add-product');
			addBtn.disabled = true;
		}

	}

}
