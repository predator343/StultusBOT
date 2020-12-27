const Discord = require('discord.js');
const config = require("../../config.json");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  var msg = args.join(" ");
  message.delete();
  message.channel.send(msg);
}

//name this whatever the command name is.
module.exports.help = {
  name: "say",
  aliases: []
}