const inquirer = require('inquirer');
const Contact = require('../db/models').Contact;

module.exports = class ContactController{
  constructor(){
    this.contacts = [];
    this.addContactQuestions = [
      {
        type: 'input',
        name: 'name',
        message: 'contact\'s name: ',
        validate(val){
          return val !== '';
        }
      },
      {
        type: 'input',
        name: 'phone',
        message: 'contact\'s phone number: ',
        validate(val){
          return val !== '';
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'contact\'s email id: ',
        validate(val){
          return val !== '';
        }
      }
    ];
  }

  addContact(name, phone, email){
    return Contact.create({name, phone, email});
  }
}
