/* File System Module
• Create a file using open()
• Update created file using appendFile
• Update created file using writeFile()
• ReadFile() and output its value */

var fs = require('fs');

fs.open('new_fresh_file.txt', 'w',  function(err, file) {
        if (err) throw err;
        console.log('Saved');
    });

fs.appendFile('new_fresh_file.txt', 'there is new content',
    function (err) {
        if (err) throw err;
        console.log('Saved');
    });

fs. writeFile('new_fresh_file.txt', 'added new text',
    function (err) {
        if (err) throw err;
        console.log('Saved');
    });

fs.readFile('new_fresh_file.txt', "utf8", function (err, data) {
    if (err) throw err;
    console.log (data);
});