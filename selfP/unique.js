//find unique items from arrays of number or string in object
const Findunique = (objArr) => {
    let mergArr = [];
    objArr.data.forEach(element => {
        mergArr = [...mergArr, ...element];

    });
    //to remive duplicate
    const uniqueArr = [...new Set(mergArr)].sort((a, b) => a - b);
    return uniqueArr;
}
console.log(Findunique({
    data: [
        [25, 75, 12, 14, 1],
        [35, 24, 12, 2],
        [7, 1, 75, 24, 15, 7],
        ["a", "b", "a"]
    ]
}))