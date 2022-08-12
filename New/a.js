const _mergeArray = (a, b) => {
    const c = []
    while (a.length && b.length) {
        c.push(a[0] > b[0] ? b.shift() : a.shift())
    }
    while (a.length) {
        c.push(a.shift())
    }
    while (b.length) {
        c.push(b.shift())
    }
    return c
}
const mergesort = (a) => {
    if (a.length < 2) return a;
    const middle = Math.floor(a.length / 2);
    const a_1 = a.slice(0, middle);
    const a_r = a.slice(middle, a.length);
    const sorted_1 = mergesort(a_1);
    const sorted_r = mergesort(a_r);
    return _mergeArray(sorted_1, sorted_r);
};
console.log(mergesort(["e", "c", "a", "b"]))

const _mergeArray2 = (a, b) => {
    const c = []
    if (a.length && b.length) {
        c.push(a[0] > b[0] ? b.shift() : a.shift())
    }
    if (a.length) {
        c.push(a.shift())
    }
    if (b.length) {
        c.push(b.shift())
    }
    return c
}

const mergesort2 = (a) => {
    if (a.length < 2) return a;
    const middle = Math.floor(a.length / 2);
    const a_1 = a.slice(0, middle);
    const a_2 = a.slice(middle, a.length);
    const sorted_1 = mergesort2(a_1);
    const sorted_r = mergesort2(a_2);
    return _mergeArray2(sorted_1, sorted_r)
}
console.log(mergesort2(["a", "v", "r", "u"]))