function f1() {
  console.log("first");
}
function f2(r) {}
function f3(r) {}
function f4(r) {}
f1()
  .then((r) => f2(r))
  .then((r) => f3(r))
  .then((r) => f4(r))
  .catch(g);
