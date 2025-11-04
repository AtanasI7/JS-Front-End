function printNElement(arr, step) {
    let newArr = [];

    for (let i = 0; i < arr.length; i+= step) {
        newArr.push(arr[i]);  
        // console.log(arr[i]);
        
    }

    return newArr;
    
}

printNElement(['5', '20', '31', '4', '20'], 2);
printNElement(['dsa', 'asd',  'test',  'tset'],  2);
printNElement(['1',  '2', '3',  '4',  '5'],  6);