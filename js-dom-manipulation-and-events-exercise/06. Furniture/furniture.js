document.addEventListener('DOMContentLoaded', solve);

function solve() {
	const inputFormEl = document.getElementById('input');
	const availableItemsFormEl = document.getElementById('shop');
	let outputTextareaEl = availableItemsFormEl.querySelector('textarea');

	inputFormEl.addEventListener('submit', handleItemsGeneration);
	availableItemsFormEl.addEventListener('submit', handleInfoOutput);

	function handleItemsGeneration(e) {
		e.preventDefault();
		const itemsAssArr = JSON.parse(inputFormEl.querySelector('textarea').value);
		let tbodyEl = availableItemsFormEl.querySelector('tbody');

		for (const iteminfo of itemsAssArr) {
			let newTrEl = document.createElement('tr')
			const entries = Object.entries(iteminfo);

			for (const [key, value] of entries) {
				let newTdEl = document.createElement('td');

				if (key === 'img') {
					let newImgEl = document.createElement('img');
					newImgEl.src = value;
					newTdEl.append(newImgEl);

				} else {
					let newPEl = document.createElement('p');
					newPEl.textContent = value;
					newTdEl.append(newPEl);
				}

				if (key === 'img') {
					newTrEl.prepend(newTdEl);
				} else {
					newTrEl.append(newTdEl);
				}
			}

			let newTdEl = document.createElement('td');
			let newInputEl = document.createElement('input');
			newInputEl.type = 'checkbox';
			newTdEl.append(newInputEl);
			newTrEl.append(newTdEl);

			tbodyEl.append(newTrEl);
		}
	}

	function handleInfoOutput(e) {
		e.preventDefault();

		const allCheckboxEls = availableItemsFormEl.querySelectorAll('input[type=checkbox]');

		let checkedEls = [];
		
		for (const el of allCheckboxEls) {
			if (el.checked === true) {
				checkedEls.push(el);
			}
		}

		let decFactorArr = [];
		let namesArr = []
		let totalPrice = 0;
		
		checkedEls.forEach(cbEl => {
			const infoTrEl = cbEl.parentElement.parentElement;
			
			const name = infoTrEl.querySelector('td:nth-child(2)').querySelector('p').textContent;
			const price = Number(infoTrEl.querySelector('td:nth-child(3)').querySelector('p').textContent);
			const decFactor = Number(infoTrEl.querySelector('td:nth-child(4)').querySelector('p').textContent);
			
			totalPrice += price;
			decFactorArr.push(decFactor);
			namesArr.push(name);
		});

		const avgDecFactor = decFactorArr.reduce((a, b) => a + b) / decFactorArr.length;
		
		outputTextareaEl.value = `Bought furniture: ${namesArr.join(', ')} \nTotal price: ${totalPrice} \nAverage decoration factor: ${avgDecFactor}`
	}

}