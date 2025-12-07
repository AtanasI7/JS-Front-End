async function getInfo() {
    const inputStopIdEl = document.getElementById('stopId');
    const divStopNameEl = document.getElementById('stopName');
    const ulBusesEl = document.getElementById('buses');

    const stopId = inputStopIdEl.value.trim();

    try {
        const res = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
        const data = await res.json();

        divStopNameEl.textContent = data.name;
        const incomingBuses = [];
        let entries = Object.entries(data.buses);

        ulBusesEl.innerHTML = '';

        for (const [id, time] of entries) {
            const newLiEl = document.createElement('li');

            newLiEl.textContent = `Bus ${id} arrives in ${time} minutes`;

            ulBusesEl.appendChild(newLiEl);
        }
    } catch (error) {
        divStopNameEl.textContent = 'Error';
    }

}