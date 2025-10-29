function vacation(people, clientsType, day) {
    let pricePerPerson;
    let totalPrice;

    if (day === 'Friday') {
        if (clientsType === 'Students') {
            pricePerPerson = 8.45;
        }
        else if (clientsType === 'Business') {
            pricePerPerson = 10.90;
        }
        else if (clientsType === 'Regular') {
            pricePerPerson = 15;
        }
    }
    else if (day === 'Saturday') {
        if (clientsType === 'Students') {
            pricePerPerson = 9.80;
        }
        else if (clientsType === 'Business') {
            pricePerPerson = 15.60;
        }
        else if (clientsType === 'Regular') {
            pricePerPerson = 20;
        }
    }
    else if (day === 'Sunday') {
        if (clientsType === 'Students') {
            pricePerPerson = 10.46;
        }
        else if (clientsType === 'Business') {
            pricePerPerson = 16;
        }
        else if (clientsType === 'Regular') {
            pricePerPerson = 22.50
        }
    }

    totalPrice = people * pricePerPerson;

    if (clientsType === 'Students') {
        if (people >= 30) {
            totalPrice -=(people * pricePerPerson) * 0.15
        }
    }
    else if (clientsType === 'Business') {
        if (people >= 100) {
            totalPrice = (people - 10) * pricePerPerson;
        }
    }
    else if (clientsType === 'Regular') {
        if (20 >= people >= 10) {
            totalPrice -= (people * pricePerPerson) * 0.05
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30,
    "Students",
    "Sunday"
);
vacation(40,
    "Regular",
    "Saturday"
);