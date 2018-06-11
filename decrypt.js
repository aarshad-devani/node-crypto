const crypto = require('crypto');
const fs = require('fs');

let filestrings = fs.readFileSync("./abc_encrypted.txt").toString().split("\n");
let encryptedStrings = [];

filestrings.forEach(element => {
    var mykey = crypto.createDecipher('aes-128-cbc', 'mypassword');
    var mystr = mykey.update(element, 'hex', 'utf8')
    mystr += mykey.final('utf8');
    encryptedStrings.push(mystr.toString());
});

fs.writeFileSync("./abc_decrypted.txt",encryptedStrings.join("\n"));