const Contact = require('../models/Contact');
const phonebook = require('../phonebook');

module.exports = {
  index: (req, res) => {
    let contacts = phonebook.getPhonebook()
    console.log(contacts);
    res.render('index', { contacts });  
  },
  addPhonebookPost:(req, res) => {
    // TODO: add a phonebook object to the array
    let name = req.body.name;
    let number = req.body.number;
    let contact = new Contact(name, number)
    phonebook.addContact(contact);
    res.redirect('/')
  }
}