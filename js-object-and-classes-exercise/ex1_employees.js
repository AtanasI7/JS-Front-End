function employeeFactory(arr) {
    let employeesArr = [];

    for (const employee of arr) {
        const employeeObj = { name: employee, personalNumber: employee.length }
        employeesArr.push(employeeObj)
    }

    for (const emp of employeesArr) {
        console.log(`Name: ${emp.name} -- Personal Number: ${emp.personalNumber}`);
    }
}

employeeFactory(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);