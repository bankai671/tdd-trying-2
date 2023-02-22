const { Book } = require('../Book');
const { CD } = require('../CD');
const { Movie } = require('../Movie');
const { Library } = require('../Library');
const { LibrarySystem } = require('../LibrarySystem');

describe('LibrarySystem', () => {
  let book;
  let movie;
  let cd;

  let library1;
  let library2;

  let librarySystem;

  beforeEach(() => {
    book = new Book();
    movie = new Movie();
    cd = new CD();

    library1 = new Library({ items: [book] });
    library2 = new Library({ items: [movie, cd] });

    librarySystem = new LibrarySystem({
      name: 'Toledo Lucas County Public Library',
      libraries: [library1, library2],
    });
  });

  it('has a name', () => {
    expect(librarySystem.name).toEqual('Toledo Lucas County Public Library');
  });

  it('has libraries', () => {
    expect(librarySystem.libraries).toEqual([library1, library2]);
  });

  describe('items', () => {
    it('has items through its libraries', () => {
      expect(librarySystem.items).toEqual(library1.items.concat(library2.items));
    });

    it('available and undamaged items are avaiable items', () => {
      spyOn(book, 'isAvailable').and.returnValue(false);
      spyOn(movie, 'isDamaged').and.returnValue(true);

      expect(librarySystem.availableItems()).toEqual([cd]);
    });

    it('checked out and damaged items are unavailable items', () => {
      spyOn(book, 'isCheckedOut').and.returnValue(true);
      spyOn(movie, 'isDamaged').and.returnValue(true);

      expect(librarySystem.unavailableItems()).toEqual([book, movie]);
    });
  });
});
