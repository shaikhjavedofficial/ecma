const Percentage = (numbers) => {
    var add = 0;
    numbers.map((item) => add = item + add)
    return `The Percentage is ${(add / numbers.length)}%`
}
console.log(Percentage([45, 43, 67, 89, 68]))
console.log(Percentage([95, 90, 87, 94, 87, 86, 80]))
console.log(Percentage([78, 89, 35, 68, 99, 95, 97, 98, 69]))

//optimized method//

const Perc = (num) => (num.reduce((a, b) => a + b)) / num.length
console.log(Perc([45, 43, 67, 89, 68]))



// numbers.forEach((item) => add = item + add)