// function App(n) {
//   for (var i = 0; i < n; i++) {
//     for (var f = 0; f <= n; f++) {
//       console.log(" ");
//     }
//     for (var j = 0; j <= i; j++) {
//       console.log(" @");
//     }
//   }
// }
// App(5);

var totalRw = 5;
for (var i = 1; i <= totalRw; i++) {
  for (var k = 1; k <= totalRw - i; k++) {
    document.write(" ");
  }

  for (var j = 1; j <= i; j++) {
    document.write("* ");
  }
  document.write("<br/>");
}
