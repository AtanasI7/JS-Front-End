function addressBook(arr) {
    let addresses = {};

    for (let data of arr) {
        let [name, address] = data.split(':');
        addresses[name] = address;
    }

    let entries = Object.entries(addresses).sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let [name, address] of entries) {
        // let [name, address] = entry;
        
        console.log(`${name} -> ${address}`);
        
        
        
    }
    

}

addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);