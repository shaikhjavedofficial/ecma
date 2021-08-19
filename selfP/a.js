async function A() {
    // var x = {},
    //     y = {
    //         key: "y"
    //     },
    //     a = {
    //         key: "z"
    //     },
    //     z = {
    //         key: "z"
    //     };
    // x[y] = 11;
    // x[z] = 21;
    // x[a] = 43;
    //consolw.log(x[y])

    //q2//
    // var i = 0;
    // do {
    //     i++;
    //     if (i == 5) {
    //         console.log("work");
    //         continue;
    //         i = 0;
    //     }
    // } while (i < 7);

    //Q3//
    var cars = 2;
    do {
        cars /= 2;
    } while (cars < 1);

    console.log("Number of cars: " + cars)
}
console.log(A())