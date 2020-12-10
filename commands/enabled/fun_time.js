const Discord = require('discord.js');
const conf = require('../configs/global.json');
var date = new Date();

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
    var tz = date.getTimezoneOffset() / 60;
    var h = date.getHours();
    var m = date.getMinutes();
    
    // what comes before the time.
    const start = [
      "It is currently: ",
      "The time is: ",
      "It is: ",
      "Da time is probably: "
    ]

    // randomizes it.
    var srtat = Math.floor(Math.random() * start.length);
    
    if (m < 10)
    {
        var time =  h + ":0" + m ; // :0 is neccesary otherwise it wont display properly.
    } else {
        var time = h + ":" + m;
    }



    message.channel.send(start[srtat] + conf.md + time + " UTC" + tz + conf.md);
}

//name this whatever the command name is.
module.exports.help = {
  name: "time"
}