const fs = require('fs');
const path = require('path');

const CONTACTS_FILE = path.join(__dirname, '..', 'contacts.json');

function loadContacts() {
  console.log('Loading contacts from contacts.json...');

  if (!fs.existsSync(CONTACTS_FILE)) {
    console.log('✗ File not found - creating new contact list');
    return [];
  }

  try {
    const fileData = fs.readFileSync(CONTACTS_FILE, 'utf8');
    const contacts = JSON.parse(fileData);

    if (!Array.isArray(contacts)) {
      console.log('✗ Error: contacts.json is corrupted - starting with empty contact list');
      return [];
    }

    console.log(`✓ Loaded ${contacts.length} contacts`);
    return contacts;
  } catch (error) {
    console.log('✗ Error: contacts.json is corrupted - starting with empty contact list');
    return [];
  }
}

function saveContacts(contacts) {
  try {
    const data = JSON.stringify(contacts, null, 2);
    fs.writeFileSync(CONTACTS_FILE, data, 'utf8');
    console.log('✓ Contacts saved to contacts.json');
  } catch (error) {
    throw new Error(`Failed to save contacts to contacts.json: ${error.message}`);
  }
}

module.exports = {
  loadContacts,
  saveContacts,
};
