document.addEventListener('DOMContentLoaded', focused);

function focused() {
    const allInputEls = document.querySelectorAll('.panel input[type=text]');
    
    for (let el of allInputEls) {
        el.addEventListener('focus', handleFocus);
        el.addEventListener('blur', handleBlur);
    }

    function handleFocus(e) {
        e.target.parentElement.classList.add('focused');
    }

    function handleBlur(e) {
        e.target.parentElement.classList.remove('focused');
    }
}
