class ShippingContainer {
  constructor({
    destination,
    boxes,
    maxWeight,
    type,
  }) {
    this.destination = destination;
    this.boxes = boxes;
    this.maxWeight = maxWeight;
    this.type = type;
  }

  get currentWeight() {
    return this.boxes.reduce((acc, current) => acc + current.weight, 0);
  }

  addBox(box) {
    const isValid = this.currentWeight + box.weight < this.maxWeight && box.type === this.type;
    if (isValid) {
      this.boxes.push(box);
    }
    return isValid;
  }
}

module.exports = { ShippingContainer };
