const Discord = require('discord.js');
const config = require("../../config.json");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  const embed = new Discord.RichEmbed() //Ver 11.5.1 of Discord.js
  .setTitle("Sophie")
  .setDescription("Sophie is an AI Powered child predator prevention bot!")
  .setColor("#1cfc72s")
  .addField("GitHub", "https://github.com/sophieproject/sophiebot", false)
  .addField("Founder", "https://github.com/WillKenzie", true)
  .addField("Founder 2", "https://github.com/faultydev", true)
  .setFooter("this is an ad.");
  message.channel.send(embed)
}

//name this whatever the command name is.
module.exports.help = {
  name: "sophie"
}