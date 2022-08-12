var str = "this is an example of an string search";
console.log(str.search("s"));
// all of above methods accepts  two arguments, one is string, second is position
console.log(str.startsWith("an", 8));
console.log(str.endsWith("g", str.length - 7));
console.log(str.includes("t", str.length - 12));
