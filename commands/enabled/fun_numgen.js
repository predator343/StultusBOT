const Discord = require('discord.js');
const config = require("../../config.json");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
    var random = Math.floor(Math.random() * 100);
    message.reply(random + " is your number!");
}

//name this whatever the command name is.
module.exports.help = {
  name: "numgen"
}