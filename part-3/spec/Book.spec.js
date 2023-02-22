const { Book } = require('../Book');

describe('Book', () => {
  let book;
  beforeEach(() => {
    book = new Book({
      title: 'The Merry Adventures of Robin Hood of Great Renown in Nottinghamshire',
      length: 192,
      author: 'Howard Pyle',
      format: 'paperback',
      language: 'English',
    });
  });

  it('has a title', () => {
    expect(book.title).toEqual(
      'The Merry Adventures of Robin Hood of Great Renown in Nottinghamshire',
    );
  });

  it('has a length', () => {
    expect(book.length).toEqual(192);
  });

  it('has an author', () => {
    expect(book.author).toEqual('Howard Pyle');
  });

  it('has a format', () => {
    expect(book.format).toEqual('paperback');
  });

  it('has a language', () => {
    expect(book.language).toEqual('English');
  });

  it('does not have a runtime', () => {
    expect(book.runtime).toBeUndefined();
  });

  it('does not have an artist', () => {
    expect(book.artist).toBeUndefined();
  });

  describe('availability', () => {
    it('can be available', () => {
      expect(book.isAvailable()).toBe(true);
    });

    it('can be checked out', () => {
      book.checkout();
      expect(book.isCheckedOut()).toBe(true);
    });

    it('becomes unavailable when checked out', () => {
      book.checkout();
      expect(book.isAvailable()).toBe(false);
    });

    it('becomes available when returned', () => {
      book.checkout();
      expect(book.isAvailable()).toBe(false);

      book.returnBook();
      expect(book.isAvailable()).toBe(true);
    });
  });

  describe('maintenance', () => {
    it('reports whether or not its damaged', () => {
      expect(book.isDamaged()).not.toBeTruthy();
    });

    it('can be damaged', () => {
      book.recordDamage();
      expect(book.isDamaged()).toBe(true);
    });

    it('can be repaired', () => {
      book.recordDamage();
      expect(book.isDamaged()).toBe(true);

      book.repair();
      expect(book.isDamaged()).toBe(false);
    });
  });
});
