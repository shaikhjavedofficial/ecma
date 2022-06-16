let person = {
  first: "Angie",
  hobbies: ["bike", "hike", "ski"],
  printHobbies: function () {
    this.hobbies.forEach((hobby) => {
      let string = `${this.first} likes to ${hobby}`;
      console.log(string);
    });
  }
};

person.printHobbies();
