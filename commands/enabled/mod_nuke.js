

const Discord = require('discord.js');

const config = require("../configs/global.json");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
    const embed = new Discord.RichEmbed();

    if(args[0] == "-h") {

      embed.setColor('RANDOM');
      embed.setTitle(exports.help.name + " help.");
      embed.addField("layout:", config.prefix + exports.help.name + " [server/channel]", false);
      embed.addField("purpose:", "Nukes the channel or the server.", false);
      message.channel.send(embed);
      return;
    }

    if(!message.member.hasPermission('ADMINISTRATOR')) return;

    if(args[0] == "server"){
        message.guild.channels.deleteAll();
    }
    if(args[0] == "channel"){
        message.channel.delete();
    }
}

//name this whatever the command name is.
module.exports.help = {
  name: 'nuke',
  aliases: []
}