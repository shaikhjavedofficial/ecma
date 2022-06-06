const febonacci = (n) => {
  var n1 = 0;
  var n2 = 1;
  var n3;
  for (var i = 0; i <= n; i++) {
    console.log(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
};
febonacci(13);
