const arr = [0, 2, 3, 4];
console.log(arr.reduce((acc, num) => Number(acc) + Number(num ** 3), []));
console.log(arr.reduce((acc, num) => acc + num ** 3, 0));