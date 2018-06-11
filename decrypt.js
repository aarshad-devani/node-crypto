var crypto = require('crypto');

var mykey = crypto.createDecipher('aes-128-cbc', 'mypassword');
var mystr = mykey.update('fdd794490b51d5c0380b96b94bc3357c', 'hex', 'utf8')
mystr += mykey.final('utf8');

console.log(mystr);