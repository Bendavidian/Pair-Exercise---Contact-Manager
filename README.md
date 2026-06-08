# Pair-Exercise - Contact Manager

This is a pair programming exercise for a Node.js command-line Contact Manager.

## Supported commands

- `node contacts.js add "name" "email" "phone"`
- `node contacts.js list`
- `node contacts.js search "query"`
- `node contacts.js delete "email"`
- `node contacts.js help`

## Notes

- Entry file: `contacts.js`
- Uses CommonJS modules (`require` / `module.exports`)
- No external npm packages
- Contacts will later be stored in `contacts.json`
- Logic is separated from the command-line UI
