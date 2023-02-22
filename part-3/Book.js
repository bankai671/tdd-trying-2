class Book {
  constructor({
    length,
    title,
    author,
    format,
    language,
  } = {}) {
    this.length = length;
    this.title = title;
    this.author = author;
    this.format = format;
    this.language = language;
    this.checkedOut = false;
    this.damaged = false;
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

  returnBook() {
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

module.exports = { Book };
