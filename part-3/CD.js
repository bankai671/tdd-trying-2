class CD {
  constructor(options = {}) {
    this.runtime = options.runtime;
    this.title = options.title;
    this.artist = options.artist;
    this.label = options.label;
  }

  isCheckedOut() {
    return this.checkedOut;
  }

  isAvailable() {
    return !this.isCheckedOut();
  }

  checkout() {
    this.checkedOut = true;
  }

  returnCD() {
    this.checkedOut = false;
  }

  recordDamage() {
    this.damaged = true;
  }

  repair() {
    this.damaged = false;
  }

  isDamaged() {
    return this.damaged;
  }
}

module.exports = { CD };
