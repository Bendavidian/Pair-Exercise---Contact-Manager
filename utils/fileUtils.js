const fs = require('fs');
const path = require('path');

const CONTACTS_FILE = path.join(__dirname, '..', 'contacts.json');

function loadContacts() {
  return [];
}

function saveContacts(contacts) {
  return contacts;
}

module.exports = {
  loadContacts,
  saveContacts,
};
