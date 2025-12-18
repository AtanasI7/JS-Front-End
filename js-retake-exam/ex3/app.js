const hostTeamInputEl = document.getElementById('host');
const finalScoreInputEl = document.getElementById('score');
const guestTeamInputEl = document.getElementById('guest');
const addBtnEl = document.getElementById('add-match');
const editBtnEl = document.getElementById('edit-match');
const loadMatchesBtnEl = document.getElementById('load-matches');
const listMatchesUlEl = document.getElementById('list');

let currentMatchId = null;

addBtnEl.addEventListener('click', handleMatchAdd);
editBtnEl.addEventListener('click', handleMatchEdit);
loadMatchesBtnEl.addEventListener('click', handleMatchesLoad);

async function handleMatchesLoad(e) {
    const matchesRes = await fetch('http://localhost:3030/jsonstore/matches/');
    const mathcesData = await matchesRes.json();

    const matchesInfo = Object.values(mathcesData);

    listMatchesUlEl.innerHTML = '';

    for (const match of matchesInfo) {
        const newLiEl = document.createElement('li');
        const newDivInfoEl = document.createElement('div');
        const newPHostEl = document.createElement('p');
        const newPFinalScoreEl = document.createElement('p');
        const newPGuestEl = document.createElement('p');
        const newDivBtnWrapperEl = document.createElement('div');
        const newBtnChangeEl = document.createElement('button');
        const newBtnDeleteEl = document.createElement('button');

        newLiEl.classList.add('match');
        newDivInfoEl.classList.add('info');
        newDivBtnWrapperEl.classList.add('btn-wrapper');
        newBtnChangeEl.classList.add('change-btn');
        newBtnDeleteEl.classList.add('delete-btn');

        newPHostEl.textContent = match.host;
        newPFinalScoreEl.textContent = match.score;
        newPGuestEl.textContent = match.guest;
        newBtnChangeEl.textContent = 'Change';
        newBtnDeleteEl.textContent = 'Delete';

        newLiEl.appendChild(newDivInfoEl);
        newDivInfoEl.appendChild(newPHostEl);
        newDivInfoEl.appendChild(newPFinalScoreEl);
        newDivInfoEl.appendChild(newPGuestEl);

        newLiEl.appendChild(newDivBtnWrapperEl);
        newDivBtnWrapperEl.appendChild(newBtnChangeEl);
        newDivBtnWrapperEl.appendChild(newBtnDeleteEl);

        listMatchesUlEl.appendChild(newLiEl);

        newBtnChangeEl.addEventListener('click', handleMatchChange);
        newBtnDeleteEl.addEventListener('click', handleMatchDelete);

        async function handleMatchChange(e) {
            hostTeamInputEl.value = newPHostEl.textContent;
            finalScoreInputEl.value = newPFinalScoreEl.textContent;
            guestTeamInputEl.value = newPGuestEl.textContent;

            addBtnEl.disabled = true;
            editBtnEl.disabled = false;

            currentMatchId = match._id;
        }

        async function handleMatchDelete(e) {
            await fetch(`http://localhost:3030/jsonstore/matches/${match._id}`, {
                method: 'DELETE'
            });

            handleMatchesLoad();
        }
    }
}

async function handleMatchAdd(e) {
    hostName = hostTeamInputEl.value;
    finalScore = finalScoreInputEl.value;
    guestName = guestTeamInputEl.value;

    await fetch('http://localhost:3030/jsonstore/matches/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            host: hostName,
            score: finalScore,
            guest: guestName
        })
    })

    hostTeamInputEl.value = '';
    finalScoreInputEl.value = '';
    guestTeamInputEl.value = '';

    handleMatchesLoad();
}

async function handleMatchEdit(e) {
    await fetch(`http://localhost:3030/jsonstore/matches/${currentMatchId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            host: hostTeamInputEl.value,
            score: finalScoreInputEl.value,
            guest: guestTeamInputEl.value,
            _id: currentMatchId
        })
    });

    handleMatchesLoad();

    addBtnEl.disabled = false;
    editBtnEl.disabled = true;

    hostTeamInputEl.value = '';
    finalScoreInputEl.value = '';
    guestTeamInputEl.value = '';

    currentMatchId = null;
}