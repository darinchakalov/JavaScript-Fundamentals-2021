const Contact = require("./models/Contact");

/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/
let phonebook = [
	new Contact('Darin', '+35955555555')
];

function getPhonebook() {
    return phonebook;
}

function addContact(contact) {
    phonebook.push(contact);
}

module.exports = {
    getPhonebook,
    addContact,
};
