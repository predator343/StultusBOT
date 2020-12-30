const Discord = require('discord.js');
const conf = require("../configs/global.json");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  const embed = new Discord.RichEmbed();
  // comes before the number
  const start = [
    "Your number: ",
    "The number you requested: ",
    "Here you go kind sir: ",
    "Da number is: "
  ]

  // randomizes it.
  var srtat = Math.floor(Math.random() * start.length);
  
  if (args == "") {
    
    var random = Math.floor(Math.random() * conf.num_def);
  
  } else {
  
    var random = Math.floor(Math.random() * args);
        
  }

  embed.setColor('RANDOM')
  embed.setTitle(start[srtat] + conf.md + random + conf.md);
  
  message.reply(embed);
}

//name this whatever the command name is.
module.exports.help = {
  name: "numgen",
  aliases: []
}