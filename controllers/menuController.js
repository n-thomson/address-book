const inquirer =  require('inquirer');
const ContactController = require('./ContactController');

module.exports = class MenuController{
  constructor(){
    this.mainMenuQuestions = [
      {
        type: 'list',
        name: 'mainMenuChoice',
        message: 'Please choose from an option below: ',
        choices: ['Add new contact', 'Get current date and time', 'Exit']
      }
    ];
    this.book = new ContactController();
    this.getDate = function(){
      let currentDate = new Date();
      console.log(currentDate.toString());
      this.main();
    }
  }

  main(){
    console.log('Welcome to my address book!');
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch (response.mainMenuChoice) {
        case 'Add new contact': this.addContact();
          break;
        case 'Exit': this.exit();
          break;
        case 'Get current date and time' : this.getDate();
          break;
        default: console.log('Invalid input');
          this.main();
      }
    })
    .catch((err) => console.log(err));
  }

  clear(){
    console.log("\x1Bc");
  }

  addContact(){
    this.clear();
    inquirer.prompt(this.book.addContactQuestions).then((answers) =>{
      this.book.addContact(answers.name, answers.phone).then((contact) => {
        console.log('contact added successfully!');
        this.main();
      }).catch((err) =>{
        console.log(err);
        this.main();
      });
    });
  }

  exit(){
    console.log('Thanks for using my address book!');
    process.exit();
  }

  remindMe(){
    return 'Learning is a life-long pursuit.';
  }
}
