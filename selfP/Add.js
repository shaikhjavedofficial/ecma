const add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(10, 0222))

const Big = (x, y) => {
    return x > y ? `${x} is Big` : `${y} is Big`;
}
console.log(Big(12032, 65588))

const BigArray = (x) => {
    let y = 0; //console.log(Math.max(...x))
    for (i = 0; i < x.length; i++) {
        y > x[i] ? y : y = x[i]
    }
    console.log(Math.max(...x))
    return y;
}
console.log(BigArray([1, 2, 3, 6, 5, 4, 8, 8, 90, 10, 3, 5, 56]))

const strArray = (arrStr) => {
    let maxStr = arrStr[0].length;
    let strData = arrStr[0];
    arrStr.forEach((element) => {
        if (maxStr < element.length) {
            maxStr = element.length;
            strData = element;
        }
    });
    return strData;
}
console.log(["hi", "hello", "javed", "developer"])

// const factorArray = (num) => {
//     // let number = num;
//     let factor = []
//     for (i = num - 1; i > 0; i--) {
//         num = num * i
//         factor[i] = i
//         // number = number - 1
//     }
//     return
// }
// console.log(factorArray(10))

// const factorArr = (num) => {
//     let number = num;
//     let factor = []
//     for (i = 0; i < num; i++) {
//         number = number * i
//         if (i > 0) {
//             factor[i] = i;
//         }
//     }
//     factor[factor.length] = num
//     return factor;
// }
// console.log(factorArr(10))

const factors = (num) => {
    let fact = num;
    fact = (num) => num > 2 ? 1 : fact(num - 1)
    return fact;
}
console.log(factors(10))

fact = (num) => num < 2 ? 1 : fact(num - 1)
console.log(fact(10))