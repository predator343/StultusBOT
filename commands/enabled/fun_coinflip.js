const Discord = require('discord.js');
const config = require("../../config.json");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  random = Math.floor((Math.random() * 2) + 1);
  if (random == 1) {
    message.channel.send("heads");
  } else {
    message.channel.send("tails");
  }
}

//name this whatever the command name is.
module.exports.help = {
  name: "coinflip"
}