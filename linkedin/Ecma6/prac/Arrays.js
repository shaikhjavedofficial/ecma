function Array_ops() {
    let newArray = new Array()
    newArray.push("first item")
    newArray.unshift("now this is the first item by using shift")
    console.log("Array by new method", newArray)
    console.log("concat Array", newArray.concat([456]))
    newArray.values((item) => {
        console.log(item)
    })
    console.log("search Arrays using include", newArray.includes("first item", 1))

}
Array_ops()

//  print 1 to 100 without using loops
// print prime number in same
var arr = []

function Rec() {
    arr.length != 0 ? arr.push(arr.length + 1) : arr.push(0)
    arr.length != 100 && Rec()
    return arr
}
console.log(Rec())

// very basic
var num = 0

function Rec2() {
    console.log(num)
    num = num + 1
    num != 101 && Rec2()
}
// Rec2()

var pnum = 7

function RecPrime() {
    var num2 = 0

    function Rec3() {
        num2 = num2 + 1
        num2 != 101 && Rec3()
        pnum % num2 == 0 && console.log(pnum)
    }
    Rec3()
}
RecPrime()

const primeN = (num0) => {
    for (var i = 0; i <= 100; i++) {
        num0 % i == 0 && console.log("is prime at", i)
    }
}
primeN(6)