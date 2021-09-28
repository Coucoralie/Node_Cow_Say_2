const userInfo = require("./information");

var cowsay = require("cowsay");
console.log( cowsay.say ({
    text : `Hello, I'm ${userInfo.name} from ${userInfo.campus} Campus!`,
    e : "oO",
    T : "U"
}));