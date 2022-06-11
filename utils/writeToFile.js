// File System
const fs = require('fs');

// Wrapper for writeFile
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            };

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = writeToFile;