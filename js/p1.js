let a = [1, 2, 3, 4];
var b = new Array();
let c = a.map((item) => item);
let d = a.slice(-a.length);
let e = a.slice(-3, 3);
// console.log(d);
// console.log(e);
// console.log(a.length);
let arr = [5, 6, 63, 8];
function abc(...arr) {
  return arr[1];
}
console.log(abc(...arr));
