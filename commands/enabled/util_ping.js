const Discord = require('discord.js');

const config = require("../configs/global.json");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  const embed = new Discord.RichEmbed();

  embed.setColor('RANDOM');
  embed.setDescription("Pong!");

  message.reply(embed);
}

//name this whatever the command name is.
module.exports.help = {
  name: 'ping',
  aliases: []
}