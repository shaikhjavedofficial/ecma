class Hike {
  constructor(distance, pace) {
    this.distance = distance;
    this.pace = pace;
  }
  get lengthInHours() {
    return `${this.calcLength()} hours`;
  }
  calcLength() {
    return this.distance / this.pace;
  }
}

const mtTallac = new Hike(10, 2);

console.log(mtTallac.lengthInHours);
