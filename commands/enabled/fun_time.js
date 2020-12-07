const Discord = require('discord.js');
const opn = require('opn');
var date = new Date();

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
    var h = date.getHours();
    var m = date.getMinutes();
    if (m < 10)
    {
        var time = h + ":0" + m;
        message.channel.send(time);
    } else {
        var time = h + ":" + m;
        message.channel.send(time);
    }
    
}

//name this whatever the command name is.
module.exports.help = {
  name: "time"
}