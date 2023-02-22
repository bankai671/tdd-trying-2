const { MediaKiosk } = require('../MediaKiosk');
const { Movie } = require('../Movie');
const { VideoGame } = require('../VideoGame');

describe('MediaKiosk', () => {
  let videoGame;
  let dvd;
  let bluRay;
  let mediaKiosk;

  beforeEach(() => {
    videoGame = new VideoGame();
    dvd = new Movie();
    bluRay = new Movie();

    mediaKiosk = new MediaKiosk({
      name: 'ReddishBox',
      location: 'Sherwood Forest',
      items: [videoGame, dvd, bluRay],
    });
  });

  it('has a name', () => {
    expect(mediaKiosk.name).toEqual('ReddishBox');
  });

  it('has a location', () => {
    expect(mediaKiosk.location).toEqual('Sherwood Forest');
  });

  describe('maintenance', () => {
    it('reports whether or not its damaged', () => {
      expect(mediaKiosk.isDamaged()).not.toBeTruthy();
    });

    it('can be damaged', () => {
      mediaKiosk.recordDamage();
      expect(mediaKiosk.isDamaged()).toBe(true);
    });

    it('can be repaired', () => {
      mediaKiosk.recordDamage();
      expect(mediaKiosk.isDamaged()).toBe(true);

      mediaKiosk.repair();
      expect(mediaKiosk.isDamaged()).toBe(false);
    });
  });

  describe('items', () => {
    it('has items', () => {
      expect(mediaKiosk.items).toEqual([videoGame, dvd, bluRay]);
    });

    it('can add an items', () => {
      const newVideoGame = new VideoGame();
      mediaKiosk.addItem(newVideoGame);
      expect(mediaKiosk.items).toContain(newVideoGame);
    });

    it('can remove an item', () => {
      expect(mediaKiosk.items).toContain(videoGame);
      mediaKiosk.removeItem(videoGame);
      expect(mediaKiosk.items).not.toContain(videoGame);
    });

    it('available and undamaged items are avaiable items', () => {
      spyOn(videoGame, 'isAvailable').and.returnValue(false);
      spyOn(bluRay, 'isDamaged').and.returnValue(true);

      expect(mediaKiosk.availableItems()).toEqual([dvd]);
    });

    it('checked out and damaged items are unavailable items', () => {
      spyOn(videoGame, 'isCheckedOut').and.returnValue(true);
      spyOn(dvd, 'isDamaged').and.returnValue(true);

      expect(mediaKiosk.unavailableItems()).toEqual([videoGame, dvd]);
    });
  });
});
