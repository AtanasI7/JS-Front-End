function attachEvents() {
    const weaterIcons = {
        'sunny': '&#x2600;',
        'partly sunny': '&#x26C5;',
        'overcast': '&#x2601;',
        'rain': '&#x2614;'
    }
    const degrees = '&#176;';


    const inputLocationEl = document.getElementById('location');
    const btnEl = document.getElementById('submit');
    const forecastDivEl = document.getElementById('forecast');
    const currentCondDivEl = forecastDivEl.querySelector('#current')
    const upcomingCondDivEl = forecastDivEl.querySelector('#upcoming');


    btnEl.addEventListener('click', handleWeatherInfo);

    async function handleWeatherInfo(e) {
        const res = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
        const data = await res.json();

        const searchedCity = inputLocationEl.value;

        for (const cityObj of data) {
            const values = Object.values(cityObj);
            const code = values[0];
            const name = values[1];

            if (searchedCity === name) {
                const newDivEl = document.createElement('div');

                const todayRes = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`);
                const todayData = await todayRes.json();

                const condition = todayData.forecast.condition;
                const highestTemp = Number(todayData.forecast.high);
                const lowestTemp = Number(todayData.forecast.low);
                const nameOfCity = todayData.name;

                const iconsEntries = Object.entries(weaterIcons);

                for (const [curCondition, iconSymbol] of iconsEntries) {
                    if (condition.toLowerCase() === curCondition) {
                        newDivEl.textContent = `${iconSymbol} ${nameOfCity} ${highestTemp} ${degrees} / ${lowestTemp} ${degrees} ${condition}`;
                        currentCondDivEl.appendChild(newDivEl);

                    }
                }

                const upcommingRes = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`);
                const upcommingData = await upcommingRes.json();

                const [firstDay, secondDay, thirdDay] = upcommingData.forecast;

                currentDayForecast(firstDay);
                currentDayForecast(secondDay);
                currentDayForecast(thirdDay);

                forecastDivEl.style.display = 'block';

                function currentDayForecast(currentDay) {
                    const condition = currentDay.condition;
                    const highestTemp = currentDay.high;
                    const lowestTemp = currentDay.low;

                    const iconsEntries = Object.entries(weaterIcons);

                    for (const [curCondition, iconSymbol] of iconsEntries) {
                        if (condition.toLowerCase() === curCondition) {
                            const newDivEl = document.createElement('div');

                            newDivEl.textContent = `${iconSymbol} ${highestTemp} ${degrees} / ${lowestTemp} ${degrees} ${condition}`;
                            upcomingCondDivEl.appendChild(newDivEl);
                        }
                    }

                }
            }
        }
    }
}

attachEvents();