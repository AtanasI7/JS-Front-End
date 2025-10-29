function fruitCost(fruit, weight, pricePerKilo) {

    let money = (weight * pricePerKilo) / 1000;
    weight = weight / 1000;


    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

fruitCost('orange', 2500, 1.80);
fruitCost('apple', 1563, 2.35);