function solve() {
    const textareaInputEl = document.querySelector('#inputs textarea');
    
    const bestRestaurantSpanEl = document.querySelector('#bestRestaurant span');
    const bestRestaurantPEl = document.querySelector('#bestRestaurant p');

    const workersSpanEl = document.querySelector('#workers span');
    const workersPEl = document.querySelector('#workers p');

    const restaurantsArrInfo = JSON.parse(textareaInputEl.value)

    let restaurantsAssArr = {};

    for (let restaurantInfo of restaurantsArrInfo) {
        // let totalSalary = 0;
        let workersAssArr = {};
        let [restaurantName, workers] = restaurantInfo.split(' - ');

        restaurantsAssArr[restaurantName] = workersAssArr;

        let workersArr = workers.split(', ')
        
        for (let currentWorker of workersArr) {
            let [name, salary] = currentWorker.split(' ');
            // totalSalary += salary;

            if (workersAssArr.hasOwnProperty(name)) {
                workersAssArr[name] += Number(salary);
            }
            else {
                workersAssArr[name] = Number(salary);
            }
        } 
        
        // restaurantsAssArr[restaurantName]['TotalSalary'] += totalSalary;
    }

    let entries = Object.entries(restaurantsAssArr);
    let rName = '';
    let rAvgSalary = 0;
    let wBestSalary = 0;
    let rWorkers = {}; 

    for (let [restaurantName, workers] of entries) {
        let currentAvgSalary = 0;
        let currentBestSalary = 0;

        let workersEntries = Object.entries(workers);
        
        for (let [wName, wSalary] of workersEntries) {
            currentAvgSalary += wSalary;

            if (wSalary > currentBestSalary) {
                currentBestSalary = wSalary;
            }

        }

        if (currentAvgSalary > rAvgSalary) {
            rName = restaurantName;
            rAvgSalary = currentAvgSalary;
            wBestSalary = currentBestSalary;
            rWorkers = workersEntries
        }

        bestRestaurantSpanEl.textContent = `Name: ${rName} Average Salary: ${rAvgSalary} Best Salary: ${wBestSalary.toFixed(2)}`;
        workersSpanEl.textContent = `Name: {worker name} With Salary: {worker salary} Name: {worker2 name} With Salary: {worker2 salary} Name: {worker3 name} With Salary: {worker3 salary}…`

    }

}