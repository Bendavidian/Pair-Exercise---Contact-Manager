const { loadContacts, saveContacts } = require('../utils/fileUtils');
const { validateContact } = require('../utils/validation');

function addContact(contact) {
   validateContact(contact.name, contact.email, contact.phone);

  const contacts = loadContacts();

  const exists = contacts.some((c) => c.email === contact.email);
  if (exists) {
    throw new Error('Contact with this email already exists');
  }

  contacts.push(contact);
  console.log(`✓ Contact added: ${contact.name}`);
  saveContacts(contacts);

  return contact;
}

function deleteContact(email) {
  const contacts = loadContacts();

  const index = contacts.findIndex((c) => c.email === email);
  if (index === -1) {
    throw new Error(`No contact found with email: ${email}`);
  }

  const [deleted] = contacts.splice(index, 1);
  console.log(`✓ Contact deleted: ${deleted.name}`);
  saveContacts(contacts);

  return deleted;
}

function listContacts() {
      return loadContacts();
}

function searchContacts(query) {
  const contacts = loadContacts();
  const lowerQuery = query.toLowerCase();

  return contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(lowerQuery) ||
      c.email.toLowerCase().includes(lowerQuery)
  );
}

module.exports = {
  addContact,
  deleteContact,
  listContacts,
  searchContacts,
};
