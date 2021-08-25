const revStr = (str) => {
    let getReverse = [];
    for (let char of str) {
        getReverse = char + getReverse;
    }
    return getReverse;
}
console.log(revStr("Hello"))