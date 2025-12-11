// -	http://localhost:3030/jsonstore/games/
// -	http://localhost:3030/jsonstore/games/:id

const loadGamesBtnEl = document.getElementById('load-games');
const allGamesDivEl = document.getElementById('games-list');
const addGameBtnEl = document.getElementById('add-game');
const editGameBtnEl = document.getElementById('edit-game');
const nameInputEl = document.getElementById('g-name');
const genreInputEl = document.getElementById('type');
const playersCountInputEl = document.getElementById('players');

let currentGameId = null;

loadGamesBtnEl.addEventListener('click', handleGamesLoad);
addGameBtnEl.addEventListener('click', handleGameAdd);
editGameBtnEl.addEventListener('click', handleGameEdit);

async function handleGamesLoad(e) {
    const gamesRes = await fetch('http://localhost:3030/jsonstore/games/');
    const gamesData = await gamesRes.json();

    allGamesDivEl.innerHTML = '';

    const gamesArr = Object.values(gamesData);

    for (const gameObj of gamesArr) {
        console.log(gameObj);


        const newBoardGameDivEl = document.createElement('div');
        const newContentDivEl = document.createElement('div');
        const newNamePEl = document.createElement('p');
        const newGenrePEl = document.createElement('p');
        const newPlayersCountPEl = document.createElement('p');
        const newBtnsContainerDivEl = document.createElement('div');
        const newChangeBtnEl = document.createElement('button');
        const newDeleteBtnEl = document.createElement('button');

        newBoardGameDivEl.classList.add('board-game');
        newContentDivEl.classList.add('content');
        newBtnsContainerDivEl.classList.add('buttons-container');
        newChangeBtnEl.classList.add('change-btn');
        newDeleteBtnEl.classList.add('change-btn');

        newBoardGameDivEl.appendChild(newContentDivEl);
        newBoardGameDivEl.appendChild(newBtnsContainerDivEl);

        newContentDivEl.appendChild(newNamePEl);
        newContentDivEl.appendChild(newGenrePEl);
        newContentDivEl.appendChild(newPlayersCountPEl);

        newBtnsContainerDivEl.appendChild(newChangeBtnEl);
        newBtnsContainerDivEl.appendChild(newDeleteBtnEl);

        newNamePEl.textContent = gameObj.name;
        newGenrePEl.textContent = gameObj.type;
        newPlayersCountPEl.textContent = gameObj.players;

        newChangeBtnEl.textContent = 'Change';
        newDeleteBtnEl.textContent = 'Delete';

        newChangeBtnEl.addEventListener('click', handleGameChange);
        newDeleteBtnEl.addEventListener('click', handleGameDelete);

        allGamesDivEl.appendChild(newBoardGameDivEl);

        async function handleGameChange(e) {
            nameInputEl.value = gameObj.name;
            genreInputEl.value = gameObj.type;
            playersCountInputEl.value = gameObj.players;
            addGameBtnEl.disabled = true;
            editGameBtnEl.disabled = false;

            currentGameId = gameObj._id;
        }

        async function handleGameDelete(e) {
            await fetch(`http://localhost:3030/jsonstore/games/${gameObj._id}`, {
                method: 'DELETE'
            });

            handleGamesLoad();
        }
    }
}

async function handleGameAdd(e) {
    const name = nameInputEl.value.trim();
    const genre = genreInputEl.value.trim();
    const playersCount = playersCountInputEl.value.trim();

    const newGameRes = await fetch('http://localhost:3030/jsonstore/games/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            type: genre,
            players: playersCount
        })
    });

    nameInputEl.value = '';
    genreInputEl.value = '';
    playersCountInputEl.value = '';

    handleGamesLoad();
}

async function handleGameEdit(e) {
    const editGameRes = await fetch(`http://localhost:3030/jsonstore/games/${currentGameId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nameInputEl.value,
            type: genreInputEl.value,
            players: playersCountInputEl.value,
            _id: currentGameId
        })
    });

    // const editGameData = await editGameRes.json();
    // console.log(editGameData);

    handleGamesLoad();

    editGameBtnEl.disabled = true;
    addGameBtnEl.disabled = false;

    nameInputEl.value = '';
    genreInputEl.value = '';
    playersCountInputEl.value = '';

    currentGameId = null;

}