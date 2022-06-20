function newMap() {
  var course = new Map();
  course.set({
    val1: "this is new ",
  });
  course.set({
    val2: "the second value",
  });
  course.set("val3", { description: "new value" });
  course.set("number", 465465);
  console.log("get spcific value of an key", course.get("val3"));
  //   console.log(course);
  console.log("Array of all keys availble in object", course.keys());
  console.log("searched key is avilble? ,", course.has("val3"));
  course.forEach((item) => {
    console.log("for each loop", item);
  });
  console.log(" size of the object = ", course.size);
}
newMap();
