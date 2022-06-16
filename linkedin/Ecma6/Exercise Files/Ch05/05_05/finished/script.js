function* director() {
  yield "Three";
  yield "Two";
  yield "One";
  yield "Action";
}

let countdown = director();

console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next());
console.log(countdown.next());
