function solve() {
	const allTdEls = document.querySelectorAll('tbody td');
	const allTrEls = document.querySelectorAll('tbody tr');
	const searchInputEl = document.getElementById('searchField');

	const searchText = searchInputEl.value.trim().toLowerCase();

	allTrEls.forEach(trEl => {
		trEl.classList.remove('select');
	})

	if (!searchText) {
		return;
	}

	allTdEls.forEach(tdEl => {	
		if (tdEl.textContent.toLowerCase().includes(searchText)) {
			const parent = tdEl.parentElement;
			parent.classList.add('select');
		}
		// else {
		// 	parent.classList.remove('select');
		// }
	})

}