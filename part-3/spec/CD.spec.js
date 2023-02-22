const { CD } = require('../CD');

describe('CD', () => {
  let cd;
  beforeEach(() => {
    cd = new CD({
      title: "Robbin' the Hood",
      runtime: 61,
      artist: 'Sublime',
      label: 'Skunk Records',
    });
  });

  it('has a title', () => {
    expect(cd.title).toEqual("Robbin' the Hood");
  });

  it('has a runtime', () => {
    expect(cd.runtime).toEqual(61);
  });

  it('has an artist', () => {
    expect(cd.artist).toEqual('Sublime');
  });

  it('has a label', () => {
    expect(cd.label).toEqual('Skunk Records');
  });

  describe('availability', () => {
    it('can be available', () => {
      expect(cd.isAvailable()).toBe(true);
    });

    it('can be checked out', () => {
      cd.checkout();
      expect(cd.isCheckedOut()).toBe(true);
    });

    it('becomes unavailable when checked out', () => {
      cd.checkout();
      expect(cd.isAvailable()).toBe(false);
    });

    it('becomes available when returned', () => {
      cd.checkout();
      expect(cd.isAvailable()).toBe(false);

      cd.returnCD();
      expect(cd.isAvailable()).toBe(true);
    });
  });

  describe('maintenance', () => {
    it('reports whether or not its damaged', () => {
      expect(cd.isDamaged()).not.toBeTruthy();
    });

    it('can be damaged', () => {
      cd.recordDamage();
      expect(cd.isDamaged()).toBe(true);
    });

    it('can be repaired', () => {
      cd.recordDamage();
      expect(cd.isDamaged()).toBe(true);

      cd.repair();
      expect(cd.isDamaged()).toBe(false);
    });
  });
});
