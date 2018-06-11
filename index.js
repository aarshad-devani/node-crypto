const fs = require('fs');
const crypto = require('crypto');

let filestrings = fs.readFileSync("./abc.txt").toString().split("\n");
let encryptedStrings = [];

filestrings.forEach(element => {
    var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
    var mystr = mykey.update(element, 'utf8', 'hex');
    mystr += mykey.final('hex');
    encryptedStrings.push(mystr.toString());
});

fs.writeFileSync("./abc_encrypted.txt",encryptedStrings.join("\n"));