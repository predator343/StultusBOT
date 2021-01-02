const Discord = require('discord.js');
const embed = new Discord.MessageEmbed();
<<<<<<< HEAD:commands/fun/fun_coinflip.js
const conf = require("../../configs/global.json");
=======
const conf = require("../configs/global.json");
>>>>>>> master:commands/enabled/fun_coinflip.js

module.exports.run = async (bot, message, args) => {
  // thanks to Will for this code.
  random = Math.floor((Math.random() * 2) + 1);

  if(args[0] == "-h") {
    const embed = new Discord.MessageEmbed();
    embed.setColor('RANDOM');
    embed.setTitle(exports.help.name + " help.");
    embed.addField("layout:", config.prefix + exports.help.name + "", false);
    embed.addField("purpose:", "look at the name.", false);
    message.channel.send(embed);
    return;

  }

  // comes before the result
  const start = [
    "It is da: ",
    "ANNNNNDDDDD: ",
    "It is: ",
    "You got: "
  ]

  // randomizes it.
  var srtat = Math.floor(Math.random() * start.length);

  if (random == 1) {
    var result = "heads"
  } else {
    var result = "tails"
  }

  embed.setColor('RANDOM');
  embed.setTitle(start[srtat] + conf.md + result + conf.md);
  
  message.reply(embed);
}

//name this whatever the command name is.
module.exports.help = {
  name: "coinflip",
  aliases: []
}