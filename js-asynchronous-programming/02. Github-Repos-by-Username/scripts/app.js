async function loadRepos() {
	const inputUsernameEl = document.getElementById('username');
	const ulEl = document.getElementById('repos');

	const username = inputUsernameEl.value.trim();

	try {
		const res = await fetch(`https://api.github.com/users/${username}/repos`);
		const data = await res.json();

		ulEl.textContent = '';

		for (const repo of data) {
			console.log(repo);

			const newLiEl = document.createElement('li');
			const newAEl = document.createElement('a');

			newAEl.href = repo.html_url;
			newAEl.textContent = repo.full_name;

			newLiEl.appendChild(newAEl);
			ulEl.appendChild(newLiEl);

		}

	} catch (error) {
		const newLiEl = document.createElement('li');
		const newAEl = document.createElement('a');

		newAEl.textContent = `Some error ocurred: ${error}`;

		newLiEl.appendChild(newAEl);
		ulEl.appendChild(newLiEl);
	}




}