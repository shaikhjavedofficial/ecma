function skier(name, sound) {
  return {
    name,
    sound,
    powderYell: function () {
      let yell = this.sound.toUpperCase();
      console.log(`${yell}! ${yell}!`);
    }
  };
}

skier("Sendy", "yeah").powderYell();
