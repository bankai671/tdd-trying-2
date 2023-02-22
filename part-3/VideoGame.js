class VideoGame {
  constructor(options = {}) {
    this.platform = options.platform;
    this.title = options.title;
    this.developer = options.developer;
    this.genre = options.genre;
  }

  isAvailable() {
    return !this.isCheckedOut();
  }

  checkout() {
    this.checkedOut = true;
  }

  isCheckedOut() {
    return this.checkedOut;
  }

  returnGame() {
    this.checkedOut = false;
  }

  isDamaged() {
    return this.damaged;
  }

  recordDamage() {
    this.damaged = true;
  }

  repair() {
    this.damaged = false;
  }
}

module.exports = { VideoGame };
