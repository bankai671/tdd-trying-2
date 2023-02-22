class MediaKiosk {
  constructor(options = {}) {
    this.name = options.name;
    this.location = options.location;
    this.items = options.items;
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

  addItem(item) {
    return this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);

    if (index > -1) {
      return this.items.splice(index, 1);
    }
    return [];
  }

  availableItems() {
    return this.items.filter((item) => item.isAvailable() && !item.isDamaged());
  }

  unavailableItems() {
    return this.items.filter((item) => !this.availableItems().includes(item));
  }
}

module.exports = { MediaKiosk };
