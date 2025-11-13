function storeProvision(inStock, onDelivery) {
    let availableItems = {};

    function processProducts(array) {
        for (let i = 0; i < array.length; i += 2) {
            const product = array[i];
            const quantity = array[i + 1];

            if (product in availableItems) {
                availableItems[product] += Number(quantity);
            } else {
                availableItems[product] = Number(quantity); 
            }
        }
    }

    processProducts(inStock);
    processProducts(onDelivery);

    const entries = Object.entries(availableItems); 
    for (const [product, quantity] of entries) {
        console.log(`${product} -> ${quantity}`);
    }
}

storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);