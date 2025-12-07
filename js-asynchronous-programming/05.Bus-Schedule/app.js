function solve() {
    const spanEl = document.querySelector('span.info');
    const departBtnEl = document.getElementById('depart');
    const arriveBtnEl = document.getElementById('arrive');

    let stopId = 'depot';
    let stopName = '';

    async function depart() {
        try {
            const res = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${stopId}`);
            const data = await res.json();
            stopName = data.name;
            stopId = data.next;

            departBtnEl.disabled = true;
            arriveBtnEl.disabled = false;
            spanEl.textContent = `Next stop ${stopName}`;
        } catch (error) {
            spanEl.textContent = 'Error';
        }


    }

    async function arrive() {
        departBtnEl.disabled = false;
        arriveBtnEl.disabled = true;

        spanEl.textContent = `Arriving at ${stopName}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();