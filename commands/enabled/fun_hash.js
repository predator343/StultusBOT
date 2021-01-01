const Discord = require('discord.js');
const main = require('../../exports');
const config = require("../configs/global.json");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes

  if(args[0] == "") {

    embed.setColor('RANDOM');
    embed.setTitle(exports.help.name + " help.");
    embed.addField("layout:", config.prefix + exports.help.name + " [hash]", false);
    embed.addField("purpose:", "Hashes given string.", false);
    message.channel.send(embed);
    return;
  }

  const embed = new Discord.RichEmbed();
  var precrypt = args.join(" ");
  var crypt = main.hash(precrypt);

  main.silent_log('string: "' + precrypt + '" was hashed into ' + crypt)

  message.delete();

  embed.setColor('RANDOM');
  embed.setTitle("Your hash:");
  embed.addField("SHA1", crypt, false)

  message.channel.send(embed);
}

//name this whatever the command name is.
module.exports.help = {
  name: 'hash',
  aliases: []
}