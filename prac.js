const strToArray = (str) => {
  var list = [];
  var splitStr = str.split(",");
  splitStr.map((item) => {
    if (item.includes("-") == false) {
      list = list.concat(parseInt(item));
    }
    if (item.includes("-")) {
      var newSplit = item.split("-");
      var list2 = [];
      newSplit.map((item) => {
        list2 = list2.concat(parseInt(item));
      });
      for (var i = list2[0]; i <= list2[list2.length - 1]; i++) {
        list = [...list, i];
      }
    }
  });
  return list.sort((a, b) => {
    return a - b;
  });
};
console.log(strToArray("15,1-5"));
const strToArray2 = (str) => {
  return str.split(",").map((item) => {
    item.includes("-") ? "haha" : false;
  });
};
console.log("ecma method", strToArray2("15,1-5"));
