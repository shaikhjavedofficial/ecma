const findDuplicate = (objArr) => {
    let newArr = []
    objArr.forEach((element, index) => {
        objArr.indexOf(element) !== index && newArr.push(element);
    });
    //another method
    //let filmethod = objArr.filter((item, index) => objArr.indexOf(item) !== index)
    return newArr;
}
console.log(findDuplicate([1, 2, 5, 3, 6, 48, 6, 5, 6, 5, 9, 8, 95, 4, 7, 5, 6]))