const Discord = require('discord.js');
const embed = new Discord.RichEmbed();
const config = require("../../config.json");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
   embed.setTitle("click me!");
   embed.setURL("https://codeducks.github.io/xBOT");

   message.channel.send(embed);
}

//name this whatever the command name is.
module.exports.help = {
  name: 'help',
  aliases: ['commands', 'helpme']
}