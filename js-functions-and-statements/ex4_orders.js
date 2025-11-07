function orders(product, quantity) {
    let price = 0;

    if (product === 'coffee') price = 1.5
    else if (product === 'water') price = 1
    else if (product === 'coke') price = 1.4
    else if (product === 'snacks') price = 2

    console.log((quantity * price).toFixed(2));
    
}

orders("water", 5);
orders("coffee", 2);