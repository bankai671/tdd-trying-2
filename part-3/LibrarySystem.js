class LibrarySystem {
  constructor(options = {}) {
    this.name = options.name;
    this.libraries = options.libraries || [];
  }

  get items() {
    return this.libraries.reduce((acc, x) => acc.concat(x.items), []);
  }

  availableItems() {
    return this.items.filter((item) => item.isAvailable() && !item.isDamaged());
  }

  unavailableItems() {
    return this.items.filter((item) => !this.availableItems().includes(item));
  }
}

module.exports = { LibrarySystem };
