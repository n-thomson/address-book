const MenuController = require('../controllers/menuController');

describe('menuController', () => {

  beforeEach(() => {
    this.menu = new MenuController();
  })

  describe('#remindMe()', () =>{
    it('should always return "learning is a lifelong pursuit."', () => {
      expect(this.menu.remindMe()).toBe('Learning is a life-long pursuit.');
    });
  })

})
