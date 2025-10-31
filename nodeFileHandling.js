// Node.js file handling example
const fs = require('fs');

// Step 1: Write to a file
const dataToSave = "This is the content of output.txt";
fs.writeFileSync('output.txt', dataToSave);
console.log('File "output.txt" has been created.');

// Step 2: Read the file
const content = fs.readFileSync('output.txt', 'utf8');
console.log('Contents of output.txt:', content);

// Step 3: Append text (optional)
fs.appendFileSync('output.txt', '\nAppending a new line.');
console.log('A new line has been appended.');

// Step 4: Read again
const updatedContent = fs.readFileSync('output.txt', 'utf8');
console.log('Updated file content:\n', updatedContent);