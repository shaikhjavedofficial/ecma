// function App() {
//   var a = 10;
//   function Inner() {
//     var a = 20;
//     return a;
//   }
//   return Inner();
// }
// console.log(App());
// // App();

// var sar = 12;
// function truth() {
//   sar = 10;
//   console.log(sar);
// }
// truth();
// console.log(sar);

function getMobile(manufacturer, model, year) {
  return {
    manufacturer,
    model,
    year,
  };
}
console.log(getMobile("Samsung", "Galaxy", "2020"));

var arr = ["sani", "javed"];
var [sani, javed] = arr;
console.log(javed);

var Obj = {
  name: "oliver",
  age: "31",
  city: "Star City",
};
var { name, age, city } = Obj;
console.log(
  `his name is ${name}, he lives in ${city}, about ${age} years ago he did some trebbile things`
);
var temp = Object.entries(Obj);
const apples = { name: "Apples" };
const bananas = { name: "Bananas" };
const oranges = { name: "Oranges" };

// Create a new Map
const fruits = new Map();

// Add the Objects to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);
console.log(typeof fruits);

const a = new Set();
a.add("javed");
a.add("sani");
console.log(typeof a);
const myPromise = new Promise(function (resolve, reject) {
  var a = false;
  setTimeout(function () {
    resolve("I love You !!");
  }, 10000);
  reject(a == true);
});

myPromise.then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log("error", error);
  }
);
