window.addEventListener("load", solve);

function solve() {
	const articleTitleInputEl = document.getElementById('title');
	const authorInputEl = document.getElementById('author');
	const summaryTextAreaEl = document.getElementById('summary');
	const addBtnEl = document.getElementById('add-btn');
	const draftUlEl = document.getElementById('draft-list');
	const publishedListUlEl = document.getElementById('published-list');

	addBtnEl.addEventListener('click', handleInfoAdd);

	function handleInfoAdd(e) {
		e.preventDefault();

		const articleTitle = articleTitleInputEl.value;
		const author = authorInputEl.value;
		const summary = summaryTextAreaEl.value;

		if (!articleTitle || !author || !summary) {
			return;
		}

		const newLiEl = document.createElement('li');
		const newArticleEl = document.createElement('article');
		const newPTitleEl = document.createElement('p');
		const newPAuthorEl = document.createElement('p');
		const newPSummaryEl = document.createElement('p');
		const newDivBtnsEl = document.createElement('div');
		const newBtnEditEl = document.createElement('button');
		const newBtnApproveEl = document.createElement('button');

		newLiEl.appendChild(newArticleEl);
		newArticleEl.appendChild(newPTitleEl);
		newArticleEl.appendChild(newPAuthorEl);
		newArticleEl.appendChild(newPSummaryEl);

		newPTitleEl.textContent = articleTitle;
		newPAuthorEl.textContent = author;
		newPSummaryEl.textContent = summary;

		newLiEl.appendChild(newDivBtnsEl);
		newDivBtnsEl.classList.add('buttons');
		newDivBtnsEl.appendChild(newBtnEditEl);
		newDivBtnsEl.appendChild(newBtnApproveEl);

		newBtnEditEl.classList.add('edit-btn');
		newBtnApproveEl.classList.add('approve-btn');

		newBtnEditEl.textContent = 'Edit';
		newBtnApproveEl.textContent = 'Approve';

		draftUlEl.appendChild(newLiEl);

		articleTitleInputEl.value = '';
		authorInputEl.value = '';
		summaryTextAreaEl.value = '';
		addBtnEl.disabled = true;

		newBtnEditEl.addEventListener('click', handleInfoEdit);
		newBtnApproveEl.addEventListener('click', handleInfoApprove);

		function handleInfoEdit(e) {
			articleTitleInputEl.value = newPTitleEl.textContent;
			authorInputEl.value = newPAuthorEl.textContent;
			summaryTextAreaEl.value = newPSummaryEl.textContent;

			draftUlEl.innerHTML = '';
			addBtnEl.disabled = false;
		}

		function handleInfoApprove(e) {
			const newPublishLiEl = document.createElement('li');
			const newPublishArticleEl = document.createElement('article');
			const newPublishPTitleEl = document.createElement('p');
			const newPublishPAuthorEl = document.createElement('p');
			const newPublishPSummaryEl = document.createElement('p');
			const newBtnPublishEl = document.createElement('button');

			newPublishLiEl.appendChild(newPublishArticleEl);
			newPublishArticleEl.appendChild(newPublishPTitleEl);
			newPublishArticleEl.appendChild(newPublishPAuthorEl);
			newPublishArticleEl.appendChild(newPublishPSummaryEl);
			newPublishLiEl.appendChild(newBtnPublishEl);

			newPublishPTitleEl.textContent = newPTitleEl.textContent;
			newPublishPAuthorEl.textContent = newPAuthorEl.textContent;
			newPublishPSummaryEl.textContent = newPSummaryEl.textContent;

			newBtnPublishEl.textContent = 'Publish';
			newBtnPublishEl.classList.add('publish-btn');

			publishedListUlEl.appendChild(newPublishLiEl)

			draftUlEl.innerHTML = '';

			newBtnPublishEl.addEventListener('click', handleInfoPublish);

			function handleInfoPublish(e) {
				publishedListUlEl.innerHTML = '';
				addBtnEl.disabled = false;
			}
		}
	}
}
