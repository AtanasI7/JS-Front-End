function attachEvents() {
    const ulEl = document.getElementById('phonebook');
    const loadBtnEl = document.getElementById('btnLoad');
    const createBtnEl = document.getElementById('btnCreate');
    const personInputEl = document.getElementById('person');
    const phoneNumberInputEl = document.getElementById('phone');


    loadBtnEl.addEventListener('click', handleUserLoad);
    createBtnEl.addEventListener('click', handleUserCreation);

    async function handleUserLoad(e) {
        const res = await fetch('http://localhost:3030/jsonstore/phonebook');
        const data = await res.json();

        const values = Object.values(data);

        ulEl.innerHTML = '';

        for (const personObj of values) {
            // console.log(personObj);

            const newLiEl = document.createElement('li');
            const newBtnEl = document.createElement('button');

            newBtnEl.addEventListener('click', handleUserDelete);

            newLiEl.textContent = `${personObj.person}: ${personObj.phone}`;
            newBtnEl.textContent = 'Delete';
            newLiEl.appendChild(newBtnEl);
            ulEl.appendChild(newLiEl);

            async function handleUserDelete(e) {
                await fetch(`http://localhost:3030/jsonstore/phonebook/${personObj._id}`, {
                    method: 'DELETE'
                });

                handleUserLoad();
            }
        }
    }

    async function handleUserCreation(e) {
        const personName = personInputEl.value.trim();
        const phoneNumber = phoneNumberInputEl.value.trim();

        const createRes = await fetch('http://localhost:3030/jsonstore/phonebook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                person: personName,
                phone: phoneNumber
            })
        });

        personInputEl.value = '';
        phoneNumberInputEl.value = '';

        handleUserLoad();
    }



}




attachEvents();