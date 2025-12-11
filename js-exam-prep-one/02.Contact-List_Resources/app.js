window.addEventListener("load", solve);


function solve() {
	const nameInputEl = document.getElementById('name');
	const phoneInputEl = document.getElementById('phone');
	const categoryInputEl = document.getElementById('category');
	const addBtnEl = document.getElementById('add-btn');
	const checkListUlEl = document.getElementById('check-list');
	const contactListUlEl = document.getElementById('contact-list');

	addBtnEl.addEventListener('click', handleContactAdd);



	function handleContactAdd(e) {
		e.preventDefault();

		const name = nameInputEl.value.trim();
		const phone = phoneInputEl.value.trim();
		const category = categoryInputEl.value.trim();

		if (!name || !phone || !category) {
			return;
		}

		const newLiEl = document.createElement('li');
		const newArticleEl = document.createElement('article');
		const newPElName = document.createElement('p');
		const newPElPhone = document.createElement('p');
		const newPElCategory = document.createElement('p');
		const newDivEl = document.createElement('div');
		const newEditBtnEl = document.createElement('button');
		const newSaveBtnEl = document.createElement('button');

		newLiEl.appendChild(newArticleEl);
		newLiEl.appendChild(newDivEl);
		newArticleEl.appendChild(newPElName);
		newArticleEl.appendChild(newPElPhone);
		newArticleEl.appendChild(newPElCategory);

		newPElName.textContent = `name:${name}`;
		newPElPhone.textContent = `phone:${phone}`;
		newPElCategory.textContent = `category:${category}`;

		newDivEl.appendChild(newEditBtnEl);
		newDivEl.appendChild(newSaveBtnEl);

		newDivEl.classList.add('buttons');
		newEditBtnEl.classList.add('edit-btn');
		newSaveBtnEl.classList.add('save-btn');

		checkListUlEl.appendChild(newLiEl);

		nameInputEl.value = '';
		phoneInputEl.value = '';
		categoryInputEl.value = '';

		newEditBtnEl.addEventListener('click', handleUserEdit);
		newSaveBtnEl.addEventListener('click', handleUserSave);

		function handleUserEdit(e) {
			nameInputEl.value = name;
			phoneInputEl.value = phone;
			categoryInputEl.value = category;

			checkListUlEl.innerHTML = '';
		}

		function handleUserSave(e) {
			contactListUlEl.appendChild(checkListUlEl);


			newEditBtnEl.remove();
			newSaveBtnEl.remove();
			newDivEl.remove();

			const newDeleteBtnEl = document.createElement('button');
			newDeleteBtnEl.classList.add('del-btn');


			contactListUlEl.appendChild(newDeleteBtnEl);

			newDeleteBtnEl.addEventListener('click', handleContactDelete);

			function handleContactDelete(e) {
				contactListUlEl.innerHTML = '';
			}

		}
	}
}

