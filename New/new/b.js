function p(m) {
  return new Promise((res) => {
    setTimeout(() => {
      res(m);
    }, 3000);
  });
}
var as = async function () {
  var p1 = p("first");
  var p2 = p("second");
  console.log(await p1);
  console.log(await p2);
  console.log("d");
};
as();
