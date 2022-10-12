var cowsay = require('cowsay');
var { message } = require('../messages');

console.log(
  cowsay.say({
    text: message
  })
);
