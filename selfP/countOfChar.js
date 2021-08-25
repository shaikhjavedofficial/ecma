const countOfChar = (str) => {
    const arrStr = str.split("");
    const newObj = {};
    arrStr.forEach((elem) => {
        newObj[elem] === undefined ? (newObj[elem] = 1) : newObj[elem]++;
    })
    return newObj;
}
console.log(countOfChar("mine success depends on your success"))