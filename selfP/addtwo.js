const addTwo = (arr1, arr2) => {
    let thirdArr = []
    arr1.forEach((elem, index1) => {
        arr2.forEach((item, index2) => {
            index1 == index2 && thirdArr.push(elem + item)
        })
    })
    return thirdArr;
}
console.log(addTwo([24, 75, 12, 14, 1, 10], [35, 24, 13, 2, 25]))

//metho 2

const addTwoMethod = (arr1, arr2) => arr1.map((item, index) => item + (arr2[index] !== undefined ? arr2[index] : 0))
console.log(addTwoMethod([24, 75, 12, 14, 1, 10], [35, 24, 13, 2, 25]))

//method 3
const addTwoM3 = (arr1, arr2) => {
    let thirdArr = []
    arr1.forEach((elem, index) => {
        thirdArr.push(elem + arr2[index])
    })
    return thirdArr;
}
console.log(addTwoM3([24, 75, 12, 14, 1, 10], [35, 24, 13, 2, 25]))

const list = (arr) => {

}
console.log(list([1, 2, 3, 4, 5, 6, 8, 5, 2, 63, 6, 5, 6]))