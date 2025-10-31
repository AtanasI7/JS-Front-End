function reverseArrNums(num, arr) {
     let newArr = arr.slice(0, num).reverse();

     console.log(newArr.join(' '));
}

reverseArrNums(3, [10, 20, 30, 40, 50]);
reverseArrNums(4, [-1, 20, 99, 5]);
reverseArrNums(2, [66, 43, 75, 89, 47]);