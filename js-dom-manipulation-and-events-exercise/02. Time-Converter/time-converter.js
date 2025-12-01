document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const [convertBtnDaysEl, convertBtnHoursEl, convertBtnMinutesEl, convertBtnSecondsEl] = document.querySelectorAll('input[type=submit]');

    convertBtnDaysEl.addEventListener('click', handleDaysConvert);
    convertBtnHoursEl.addEventListener('click', handleHoursConvert);
    convertBtnMinutesEl.addEventListener('click', handleMinutesConvert);
    convertBtnSecondsEl.addEventListener('click', handleSecondsConvert);

    function handleDaysConvert(e) {
        e.preventDefault();

        let daysInputEl = convertBtnDaysEl.parentElement.querySelector('input[type=number]');
        let hoursInputEl = convertBtnHoursEl.parentElement.querySelector('input[type=number]');
        let minutesInputEl = convertBtnMinutesEl.parentElement.querySelector('input[type=number]');
        let secondsInputEl = convertBtnSecondsEl.parentElement.querySelector('input[type=number]');

        daysInputEl.value = Number(daysInputEl.value).toFixed(2)
        hoursInputEl.value = (Number(daysInputEl.value) * 24).toFixed(2);
        minutesInputEl.value = (hoursInputEl.value * 60).toFixed(2);
        secondsInputEl.value = (minutesInputEl.value * 60).toFixed(2);
    }

    function handleHoursConvert(e) {
        e.preventDefault();

        let daysInputEl = convertBtnDaysEl.parentElement.querySelector('input[type=number]');
        let hoursInputEl = convertBtnHoursEl.parentElement.querySelector('input[type=number]');
        let minutesInputEl = convertBtnMinutesEl.parentElement.querySelector('input[type=number]');
        let secondsInputEl = convertBtnSecondsEl.parentElement.querySelector('input[type=number]');

        daysInputEl.value = (Number(hoursInputEl.value) / 24).toFixed(2)
        hoursInputEl.value = (Number(hoursInputEl.value)).toFixed(2);
        minutesInputEl.value = (hoursInputEl.value * 60).toFixed(2);
        secondsInputEl.value = (minutesInputEl.value * 60).toFixed(2);
    }

    function handleMinutesConvert(e) {
        e.preventDefault();

        let daysInputEl = convertBtnDaysEl.parentElement.querySelector('input[type=number]');
        let hoursInputEl = convertBtnHoursEl.parentElement.querySelector('input[type=number]');
        let minutesInputEl = convertBtnMinutesEl.parentElement.querySelector('input[type=number]');
        let secondsInputEl = convertBtnSecondsEl.parentElement.querySelector('input[type=number]');

        minutesInputEl.value = Number(minutesInputEl.value).toFixed(2);
        secondsInputEl.value = (minutesInputEl.value * 60).toFixed(2);
        hoursInputEl.value = (minutesInputEl.value / 60).toFixed(2);
        daysInputEl.value = (Number(hoursInputEl.value) / 24).toFixed(2);
    }

    function handleSecondsConvert(e) {
        e.preventDefault();

        let daysInputEl = convertBtnDaysEl.parentElement.querySelector('input[type=number]');
        let hoursInputEl = convertBtnHoursEl.parentElement.querySelector('input[type=number]');
        let minutesInputEl = convertBtnMinutesEl.parentElement.querySelector('input[type=number]');
        let secondsInputEl = convertBtnSecondsEl.parentElement.querySelector('input[type=number]');

        secondsInputEl.value = (Number(secondsInputEl.value)).toFixed(2);
        minutesInputEl.value = (secondsInputEl.value / 60).toFixed(2);
        hoursInputEl.value = (minutesInputEl.value / 60).toFixed(2);
        daysInputEl.value = (hoursInputEl.value / 24).toFixed(2);
    }

}