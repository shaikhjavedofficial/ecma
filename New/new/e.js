const a = (str) => {
    var arr = JSON.parse(str)
    arr = arr[0]
    arr.map((item, i) => {
        var arr2 = "";
        var arr3
        arr3 = i == i + 1 ? item ? Number ? item + item / 2 : 0 : 0
        console.log(arr3)

    })
};
a(
    '[["Swiggy",123],["Swiggy",227],["Zomato",103],["Zomato",171],["Dunzo",131],["Zomato",122],["Swiggy",181]]'
);