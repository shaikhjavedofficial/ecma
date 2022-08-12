function Set_Method() {
  let newSet = new Set();
  newSet.add("this first item");
  newSet.add("this second item");
  newSet.add("oliver Queen").add(45688);
  console.log("Main set values", newSet);
  console.log("contians 45688", newSet.has(45688));
  console.log("size of the set", newSet.size);
  console.log("delete 'this first item'", newSet.delete("this first item"));
  //   To iterate through items use forEach
  console.log("=========for each loop :");
  newSet.forEach((item) => {
    console.log(item);
  });
  console.log(" ================================ ");
}
Set_Method();
