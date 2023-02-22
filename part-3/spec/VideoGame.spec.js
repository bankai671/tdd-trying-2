const { VideoGame } = require('../VideoGame');

describe('VideoGame', () => {
  let videoGame;
  beforeEach(() => {
    videoGame = new VideoGame({
      title: 'Robin Hood: Defender of the Crown',
      platform: 'xbox',
      developer: 'Cinemaware',
      genre: 'turn-based strategy',
    });
  });

  it('has a title', () => {
    expect(videoGame.title).toEqual('Robin Hood: Defender of the Crown');
  });

  it('is for a particular platform', () => {
    expect(videoGame.platform).toEqual('xbox');
  });

  it('has a developer', () => {
    expect(videoGame.developer).toEqual('Cinemaware');
  });

  it('has a genre', () => {
    expect(videoGame.genre).toEqual('turn-based strategy');
  });

  it('does not have an artist', () => {
    expect(videoGame.artist).toBeUndefined();
  });

  it('does not have a length', () => {
    expect(videoGame.length).toBeUndefined();
  });

  it('does not have a runtime', () => {
    expect(videoGame.runtime).toBeUndefined();
  });

  describe('availability', () => {
    it('can be available', () => {
      expect(videoGame.isAvailable()).toBe(true);
    });

    it('can be checked out', () => {
      videoGame.checkout();
      expect(videoGame.isCheckedOut()).toBe(true);
    });

    it('becomes unavailable when checked out', () => {
      videoGame.checkout();
      expect(videoGame.isAvailable()).toBe(false);
    });

    it('becomes available when returned', () => {
      videoGame.checkout();
      expect(videoGame.isAvailable()).toBe(false);

      videoGame.returnGame();
      expect(videoGame.isAvailable()).toBe(true);
    });
  });

  describe('maintenance', () => {
    it('reports whether or not its damaged', () => {
      expect(videoGame.isDamaged()).not.toBeTruthy();
    });

    it('can be damaged', () => {
      videoGame.recordDamage();
      expect(videoGame.isDamaged()).toBe(true);
    });

    it('can be repaired', () => {
      videoGame.recordDamage();
      expect(videoGame.isDamaged()).toBe(true);

      videoGame.repair();
      expect(videoGame.isDamaged()).toBe(false);
    });
  });
});
