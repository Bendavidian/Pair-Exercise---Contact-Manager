const fs = require('fs');
const path = require('path');

function readFileWithErrorHandling(filePath, callback) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      if (error.code === 'ENOENT') {
        callback(`File not found: ${path.basename(filePath)}`);
        return;
      }
      if (error.code === 'EISDIR') {
        callback(`Path is a directory, not a file: ${path.basename(filePath)}`);
        return;
      }
      callback(`Unexpected error: ${error.message}`);
      return;
    }

    callback(null, `File read successfully. Size: ${data.length} bytes`);
  });
}

// Sample execution code
const existingFile = path.join(__dirname, 'existing.txt');
const missingFile = path.join(__dirname, 'missing.txt');
const directoryPath = __dirname;

readFileWithErrorHandling(existingFile, (err, message) => {
  console.log(err || message);
});

readFileWithErrorHandling(missingFile, (err, message) => {
  console.log(err || message);
});

readFileWithErrorHandling(directoryPath, (err, message) => {
  console.log(err || message);
});
