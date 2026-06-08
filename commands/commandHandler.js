
const {
  addContact,
  deleteContact,
  listContacts,
  searchContacts,
} = require('../services/contactService');

function handleCommand(args) {
  const command = args[0];

  switch (command) {
    case 'add':
      return handleAdd(args);
    case 'list':
      return handleList();
    case 'search':
      return handleSearch(args);
    case 'delete':
      return handleDelete(args);
    case 'help':
      return showHelp();
    default:
      console.log(`✗ Error: Unknown command '${command}'`);
      console.log('Usage: node contacts.js [add|list|search|delete|help] [arguments]');
  }
}

function handleAdd(args) {
  if (args.length < 4) {
    console.log('✗ Error: Missing arguments for add command');
    console.log('Usage: node contacts.js add "name" "email" "phone"');
    return;
  }

  const [, name, email, phone] = args;

  try {
    addContact({ name, email, phone });
  } catch (error) {
    console.log(`✗ Error: ${error.message}`);
  }
}

function handleList() {
  const contacts = listContacts();

  console.log('\n=== All Contacts ===');
  if (contacts.length === 0) {
    console.log('No contacts found');
    return;
  }
  contacts.forEach((c, i) => {
    console.log(`${i + 1}. ${c.name} - ${c.email} - ${c.phone}`);
  });
}

function handleSearch(args) {
     if (args.length < 2) {
    console.log('✗ Error: Missing arguments for search command');
    console.log('Usage: node contacts.js search "query"');
    return;
  }

  const query = args[1];
  const results = searchContacts(query);

  console.log(`\n=== Search Results for "${query}" ===`);
  if (results.length === 0) {
    console.log(`No contacts found matching "${query}"`);
    return;
  }
  results.forEach((c, i) => {
    console.log(`${i + 1}. ${c.name} - ${c.email} - ${c.phone}`);
  });
  }

function handleDelete(args) {
  if (args.length < 2) {
    console.log('✗ Error: Missing arguments for delete command');
    console.log('Usage: node contacts.js delete "email"');
    return;
  }
      const email = args[1];

  try {
    deleteContact(email);
  } catch (error) {
    console.log(`✗ Error: ${error.message}`);
  }
   }

function showHelp() {
  console.log('Usage: node contacts.js [command] [arguments]');
  console.log('');
  console.log('Commands:');
  console.log('  add "name" "email" "phone"  - Add a new contact');
  console.log('  list                        - List all contacts');
  console.log('  search "query"              - Search contacts by name or email');
  console.log('  delete "email"              - Delete contact by email');
  console.log('  help                        - Show this help message');
  console.log('');
  console.log('Examples:');
  console.log('  node contacts.js add "John Doe" "john@example.com" "555-123-4567"');
  console.log('  node contacts.js search "john"');
  console.log('  node contacts.js delete "john@example.com"');
}

module.exports = {
  handleCommand,
  showHelp,
};
