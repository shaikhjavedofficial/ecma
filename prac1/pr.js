const findnum = (num) => {
    var n = 0
    num.forEach(element => {
        if (element == 12) {
            n = n + 1
        }
    });
    return n;
};
console.log(findnum([12, 36, 21, 12, 5, 12]))