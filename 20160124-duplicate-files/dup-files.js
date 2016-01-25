var fs = require('fs');
var md5File = require('md5-file');

function findFileDups(file, hashTable, dupArray) {
    if (fs.fileType(file) === 'd') {
        var dirFiles = fs.fileListSync(file);
        for (dirFile of dirFiles)
            findFileDups(dirFile, dupArray);
    } else {
        var hash = md5File(file);
        var origFile = hashTable[hash];
        if (typeof origFile === 'string') {
            // file dup
            dupArray.push([file, origFile]);
        } else {
            hashTable[hash] = file;
        }
    }
}

function runDups() {
    var fileDups = [];
    var fileHashes = {};
    findFileDups('/', fileHashes, fileDups);
    return fileDups;
}

runDups();
