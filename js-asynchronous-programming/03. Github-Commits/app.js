async function loadCommits() {
    const inputUsernameEl = document.getElementById('username');
    const inputRepoEl = document.getElementById('repo');
    const ulEl = document.getElementById('commits');

    const username = inputUsernameEl.value.trim();
    const repoName = inputRepoEl.value.trim()

    ulEl.innerHTML = '';


    const res = await fetch(`https://api.github.com/repos/${username}/${repoName}/commits`)
    const data = await res.json();

    if (!res.ok) {
        const newLiEl = document.createElement('li');

        newLiEl.textContent = `Error: ${res.status} (Not Found)`;
        ulEl.appendChild(newLiEl);
    }

    for (const commitObj of data) {
        const newLiEl = document.createElement('li');

        newLiEl.textContent = `${commitObj.commit.author.name}: ${commitObj.commit.message}`
        ulEl.appendChild(newLiEl);
    }


}