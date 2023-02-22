const hasGetter = require('has-getter');
const { ShippingContainer } = require('../ShippingContainer');
const { Box } = require('../Box');

describe('ShippingContainer', () => {
  let boxes = [];
  let shippingContainer;

  beforeEach(() => {
    boxes = [
      new Box({ weight: 300, type: 'food' }),
      new Box({ weight: 100, type: 'food' }),
    ];

    shippingContainer = new ShippingContainer({
      destination: 'Hawaii',
      boxes,
      maxWeight: 500,
      type: 'food',
    });
  });

  describe('ShippingContainer', () => {
    it('`ShippingContainer` has an attribute destination', () => {
      expect(shippingContainer.destination).toEqual('Hawaii');
    });

    it('`ShippingContainer` has an attribute maxWeight', () => {
      expect(shippingContainer.maxWeight).toEqual(500);
    });

    it('`ShippingContainer` has an attribute type', () => {
      expect(shippingContainer.type).toEqual('food');
    });

    it('`ShippingContainer` has an attribute boxes', () => {
      expect(shippingContainer.boxes).toEqual(boxes);
    });

    describe('`ShippingContainer`', () => {
      beforeEach(() => {
        shippingContainer.maxWeight = 800;
      });

      it('maxWeight in ShippingContainer is changable', () => {
        expect(shippingContainer.maxWeight).toEqual(800);
      });
    });
  });

  describe('boxes attribute test in `ShippingContainer`', () => {
    describe('currentWeight method in `ShippingContainer`', () => {
      describe('whene ShippingContainer is empty', () => {
        let emptyShippingContainer;

        beforeEach(() => {
          emptyShippingContainer = new ShippingContainer({
            destination: 'Borneo',
            boxes: [],
            maxWeight: 500,
            type: 'medicine',
          });
        });

        it('currentWeight method returns 0', () => {
          expect(emptyShippingContainer.currentWeight).toEqual(0);
        });
      });
    });

    describe('currentWeight getter in `ShippingContainer`', () => {
      it('returns the total weight of the boxes', () => {
        expect(hasGetter(shippingContainer, 'currentWeight')).toBe(true);
        expect(shippingContainer.currentWeight).toEqual(400);
      });
    });

    describe('addBox method in `ShippingContainer` ', () => {
      let newBoxWithFood;

      beforeEach(() => {
        newBoxWithFood = new Box({ weight: 50, type: 'food' });
      });

      describe('within maxWeight you can add a box in boxes', () => {
        it('the addBox method returns true if the box is added', () => {
          expect(shippingContainer.addBox(newBoxWithFood)).toEqual(true);
        });

        it('and adds the box to the boxes attribute of ShippingContainer`', () => {
          shippingContainer.addBox(newBoxWithFood);
          expect(shippingContainer.boxes).toContain(newBoxWithFood);
        });
      });

      describe('when the maxWeight attribute value is exceeded (i.e. when the maximum weight is exceeded, taking into account adding a new box)', () => {
        let smallerShippingContainer;

        beforeEach(() => {
          smallerShippingContainer = new ShippingContainer({
            destination: 'Guangzhou',
            boxes,
            maxWeight: 425,
            type: 'food',
          });
        });

        it('returns false', () => {
          expect(smallerShippingContainer.addBox(newBoxWithFood)).toEqual(false);
        });

        it('and not add box into `ShippingContainer`', () => {
          smallerShippingContainer.addBox(newBoxWithFood);
          expect(smallerShippingContainer.boxes).not.toContain(newBoxWithFood);
        });
      });

      describe('when the box type and the container type do not match', () => {
        let fullShippingContainer;

        beforeEach(() => {
          fullShippingContainer = new ShippingContainer({
            destination: 'Corpus Christi',
            boxes,
            maxWeight: 500,
            type: 'electronics',
          });
        });

        it('returns false', () => {
          expect(fullShippingContainer.addBox(newBoxWithFood)).toEqual(false);
        });

        it('and not add box into `ShippingContainer`', () => {
          fullShippingContainer.addBox(newBoxWithFood);
          expect(fullShippingContainer.boxes).not.toContain(newBoxWithFood);
        });
      });
    });
  });
});
