//error handling
const axios = require("axios");

const a = async () => {
  await axios("http://localhost:3000/posts", {
    method: "get",
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => res);
};

a().then(
  (success) => {
    console.log(success);
  },
  (error) => {
    console.log("error");
  }
);

//currying funtion
function curry1(...arr) {
  return function curry2(...arr) {
    return function curry3(...arr) {
      return console.log(a * b * c);
    };
  };
}
arr = [1, 2, 3];
curry1(...arr);
