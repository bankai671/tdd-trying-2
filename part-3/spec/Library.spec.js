const { Book } = require('../Book');
const { CD } = require('../CD');
const { Library } = require('../Library');
const { LibrarySystem } = require('../LibrarySystem');

describe('Library', () => {
  let book1;
  let book2;
  let cd;
  let librarySystem;
  let library;

  beforeEach(() => {
    book1 = new Book({ title: 'book1' });
    book2 = new Book({ title: 'book2' });
    cd = new CD();
    librarySystem = new LibrarySystem();
    library = new Library({
      name: 'Sanger Branch Library',
      location: 'Toledo, Ohio',
      librarySystem,
      items: [book1, book2, cd],
    });
  });

  it('has a name', () => {
    expect(library.name).toEqual('Sanger Branch Library');
  });

  it('has a location', () => {
    expect(library.location).toEqual('Toledo, Ohio');
  });

  it("has a library system of which it's a member", () => {
    expect(library.librarySystem).toEqual(librarySystem);
  });

  describe('items', () => {
    it('has items', () => {
      expect(library.items).toEqual([book1, book2, cd]);
    });

    it('can add an items', () => {
      const newBook = new Book();
      library.addItem(newBook);
      expect(library.items).toContain(newBook);
    });

    it('can remove an item', () => {
      expect(library.items).toContain(book1);
      library.removeItem(book1);
      expect(library.items).not.toContain(book1);
    });

    it('available and undamaged items are avaiable items', () => {
      spyOn(cd, 'isAvailable').and.returnValue(false);
      spyOn(book2, 'isDamaged').and.returnValue(true);

      expect(library.availableItems()).toEqual([book1]);
    });

    it('checked out and damaged items are unavailable items', () => {
      spyOn(cd, 'isCheckedOut').and.returnValue(true);
      spyOn(book1, 'isDamaged').and.returnValue(true);

      expect(library.unavailableItems()).toEqual([book1, cd]);
    });
  });
});
