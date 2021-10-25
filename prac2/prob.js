const info = (infodata) => infodata.map((element) => infodata = `Course Name : ${element.course} 
institute : ${element.institute}
city: ${element.city} 
contact ${element.moblieNo} `);
console.log(
    info([
      {
        course: "PDAC",
        institute: "PickupBiz",
        moblieNo: 9874561230,
        city: "Nanded",
      },
      {
        course: "Networking",
        institute: "Seed Infotech",
        moblieNo: 9874561555,
        city: "pune",
      },
  
      {
        course: "DAC ",
        institute: "C-DAC",
        moblieNo: 987456523523,
        city: "HYD",
      },
  
      {
        course: "HTML CSS",
        institute: "Naresh IT",
        moblieNo: 453636355,
        city: "Mumbai",
      },
    ])
  );
  
  