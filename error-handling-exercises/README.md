# Error Handling Exercises

This folder contains two Node.js exercises demonstrating error handling.

## Run exercise 1

```bash
node exercise1-safe-json-parse.js
```

Expected output:

```text
{ name: 'John' }
Invalid JSON format
```

## Run exercise 2

```bash
node exercise2-file-reader.js
```

Expected output will include messages for:

- successful file read
- missing file
- directory path

Example messages:

- `File read successfully. Size: X bytes`
- `File not found: missing.txt`
- `Path is a directory, not a file: error-handling-exercises`
