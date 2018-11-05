const inquirer = require('inquirer');
const menuController = require('./controllers/menuController');

const menu = new menuController();

menu.clear();
menu.main();
