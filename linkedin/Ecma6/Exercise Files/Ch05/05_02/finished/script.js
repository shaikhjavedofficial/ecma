function add(x = 5, y = 6) {
  console.log(x + y);
}

add(1, 2);

function haveFun(
  activityName = "hiking",
  time = 3
) {
  console.log(`Today I will go ${activityName}
    for ${time} hours.`);
}

haveFun("biking", 2.5);
haveFun("biking");