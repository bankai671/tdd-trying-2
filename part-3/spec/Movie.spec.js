const { Movie } = require('../Movie');

describe('Movie', () => {
  let movie;
  beforeEach(() => {
    movie = new Movie({
      title: 'Robin Hood: Prince of Thieves',
      runtime: 143,
      format: 'Blu-ray',
    });
  });

  it('has a title', () => {
    expect(movie.title).toEqual('Robin Hood: Prince of Thieves');
  });

  it('has a runtime', () => {
    expect(movie.runtime).toEqual(143);
  });

  it('has a format', () => {
    expect(movie.format).toEqual('Blu-ray');
  });

  it('does not have an artist', () => {
    expect(movie.artist).toBeUndefined();
  });

  it('does not have an author', () => {
    expect(movie.author).toBeUndefined();
  });

  it('does not have a length', () => {
    expect(movie.length).toBeUndefined();
  });

  describe('availability', () => {
    it('can be available', () => {
      expect(movie.isAvailable()).toBe(true);
    });

    it('can be checked out', () => {
      movie.checkout();
      expect(movie.isCheckedOut()).toBe(true);
    });

    it('becomes unavailable when checked out', () => {
      movie.checkout();
      expect(movie.isAvailable()).toEqual(false);
    });

    it('becomes available when returned', () => {
      movie.checkout();
      expect(movie.isAvailable()).toEqual(false);

      movie.returnMovie();
      expect(movie.isAvailable()).toBe(true);
    });
  });

  describe('maintenance', () => {
    it('reports whether or not its damaged', () => {
      expect(movie.isDamaged()).not.toBeTruthy();
    });

    it('can be damaged', () => {
      movie.recordDamage();
      expect(movie.isDamaged()).toBe(true);
    });

    it('can be repaired', () => {
      movie.recordDamage();
      expect(movie.isDamaged()).toBe(true);

      movie.repair();
      expect(movie.isDamaged()).toBe(false);
    });
  });
});
