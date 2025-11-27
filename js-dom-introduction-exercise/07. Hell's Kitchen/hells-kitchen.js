function solve() {
    const inputTextareaEl = document.querySelector('#inputs textarea');
    const outputBestRestaurantInfoEl = document.querySelector('#bestRestaurant p');
    const outputWorkersInfoEl = document.querySelector('#workers p');

    const restaurantsInfoInArr = JSON.parse(inputTextareaEl.value);

    let restaurantsInfo = {};

    for (const fullRestaurantInfo of restaurantsInfoInArr) {
        const [restaurantName, workersSalaryInfo] = fullRestaurantInfo.split(' - ');

        if (!(restaurantName in restaurantsInfo)) {
            restaurantsInfo[restaurantName] = [];
        }

        const workersSalaryArr = workersSalaryInfo.split(', ');

        for (let data of workersSalaryArr) {
            const [name, salary] = data.split(' ');
            let personObj = {
                name: name,
                salary: Number(salary)
            }
            restaurantsInfo[restaurantName].push(personObj); 
        }
    }

    let bestRestaurantName = '';
    let bestWorkers = [];
    let bestAvgSalary = 0;
    let bestWorkerSalary = 0;

    const entries = Object.entries(restaurantsInfo);

    for (const [restaurantName, workersArr] of entries) {
        
        workersArr.sort((a, b) => b.salary - a.salary);
        
        // const wEntries = Object.entries(workersArr);

        const workersSalaries = workersArr.map(worker => worker.salary);
        const currentAvgSalary = workersSalaries.reduce((acc, val) => acc + val) / workersSalaries.length;
      
        if (currentAvgSalary > bestAvgSalary) {
            bestRestaurantName = restaurantName;
            bestWorkers = workersArr;
            bestAvgSalary = currentAvgSalary;
            bestWorkerSalary = workersSalaries[0];
        }
    }

    // const wEntries = Object.entries(bestWorkers);
    const workersResult = []

    for (const info of bestWorkers) {
        workersResult.push(`Name: ${info.name} With Salary: ${info.salary}`)
    }

    // console.log(workersResult);
    
    outputBestRestaurantInfoEl.textContent = `Name: ${bestRestaurantName} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${bestWorkerSalary.toFixed(2)}`;
    outputWorkersInfoEl.textContent = workersResult.join(' ')
    
}