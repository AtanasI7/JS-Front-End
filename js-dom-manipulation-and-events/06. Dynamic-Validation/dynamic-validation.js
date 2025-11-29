document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputEmailEl = document.getElementById('email');
    

    inputEmailEl.addEventListener('change', handleWrongEmail);

    function handleWrongEmail(e) {
        const pattern = /[a-z]+@[a-z]+\.[a-z]+/;
        const emailText = inputEmailEl.value.trim();

        if (!pattern.test(emailText)) {
            e.target.classList.add('error');
        }
        else {
            e.target.classList.remove('error');
        }
    }
}
