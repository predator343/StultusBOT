const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
    const embed = new Discord.MessageEmbed();
    embed.setTitle("click me!");
    embed.setURL("https://codeducks.github.io/xBOT");

    message.channel.send(embed);
}

//name this whatever the command name is.
module.exports.help = {
  name: 'help',
  aliases: ['commands', 'helpme']
}