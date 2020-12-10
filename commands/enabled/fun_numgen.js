const Discord = require('discord.js');
const config = require("../../config.json");
const conf = require("../configs/global.json");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes

  // comes before the number
  const start = [
    "Your number: ",
    "The number you requested: ",
    "Here you go kind sir: ",
    "Da number is: "
  ]

  // randomizes it.
  var srtat = Math.floor(Math.random() * start.length);

  var random = Math.floor(Math.random() * 1000);
  message.reply(start[srtat] + conf.md + random + conf.md);
}

//name this whatever the command name is.
module.exports.help = {
  name: "numgen"
}