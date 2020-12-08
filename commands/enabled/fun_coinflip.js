const Discord = require('discord.js');
const config = require("../../config.json");

module.exports.run = async (bot, message, args) => {
  // thanks to Will for this code.
  random = Math.floor((Math.random() * 2) + 1);
  if (random == 1) {
    message.reply("heads");
  } else {
    message.reply("tails");
  }
}

//name this whatever the command name is.
module.exports.help = {
  name: "coinflip"
}