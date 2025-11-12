function phoneBook(arr) {
    let phoneBookArr = {};

    for (let entry of arr) {
        let [key, value] = entry.split(' ');
        phoneBookArr[key] = value;
    }

    let entries = Object.entries(phoneBookArr);

    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);      
    }
}

phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);