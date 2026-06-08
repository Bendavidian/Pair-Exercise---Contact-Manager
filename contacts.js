const { handleCommand } = require('./commands/commandHandler');

handleCommand(process.argv.slice(2));
