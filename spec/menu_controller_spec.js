const MenuController = require('../controllers/menuController');


describe('menuController', () => {
  beforeEach(() => {
    menu = new MenuController();
  })
  describe('getContactCount()', () => {
    it('should return 0 when no contacts are in the book', () => {
      expect(menu.getContactCount()).toBe(0);
    });
    it('should return 1 when there is exactly one contact in the book', () => {
      menu.contacts.push('Bob');
      expect(menu.getContactCount()).toBe(1);
    });
  })
})
