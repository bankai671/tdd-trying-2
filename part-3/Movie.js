class Movie {
  constructor(options = {}) {
    this.runtime = options.runtime;
    this.title = options.title;
    this.format = options.format;
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

  returnMovie() {
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

module.exports = { Movie };
