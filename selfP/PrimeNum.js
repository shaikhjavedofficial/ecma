const Prime = (num) => {
    const boundary = Math.floor(Math.sqrt(num));
    for (var i = 2; i <= boundary; i++) {
        if (num % i == 0) {
            return `Not a Prime`;
        }
    }
    return `Prime`;
}
console.log(Prime(15))
console.log(Prime(15165416515))
console.log(Prime(3))
console.log(Prime(2))