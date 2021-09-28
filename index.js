const userInfo = require("./information");

'use strict';

const {say} = require('cowsay');
const message = say({ text: `Hello, I'm ${userInfo.name} from ${userInfo.campus} Campus!`});

console.log(message);

/*var cowsay = require(" cowsay ");
console.log( cowsay.say ({
    text : `Hello, I'm ${userInfo.name} from ${userInfo.campus} Campus!`,
    e : "oO",
    T : "U"
}));*/