function meetings(arr) {
    let arrangedAppointments = {};

    for (let appointment of arr) {
        let [day, name] = appointment.split(' ');

        if (day in arrangedAppointments) {
            console.log(`Conflict on ${day}!`);
        } 
        else {
            arrangedAppointments[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    // for (let [day, name] of Object.entries(arrangedAppointments)) {
    //     console.log(`${day} -> ${name}`);
        
    // }

    // let days = Object.keys(arrangedAppointments);
    // let names = Object.values(arrangedAppointments);
    
    // for (let i = 0; i < days.length; i++) {
    //     console.log(`${days[i]} -> ${names[i]}`);
    // }

    for (let key in arrangedAppointments) {
        console.log(`${key} -> ${arrangedAppointments[key]}`);
    }
}

meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);