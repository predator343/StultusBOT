const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes

  if(args[0] == "-h") {

    embed.setColor('RANDOM');
    embed.setTitle(exports.help.name + " help.");
    embed.addField("layout:", config.prefix + exports.help.name + "", false);
    embed.addField("purpose:", "The bot says what you want it to say.", false);
    message.channel.send(embed);
    return;

  }

  var userid = message.author.id
  var user = message.member.displayName
  var msg = args.join(" ");
  
  console.log("[!] " + user + " (" + userid + ") made the bot say: " + msg)
  
  message.delete();
  message.channel.send(msg);
}

//name this whatever the command name is.
module.exports.help = {
  name: "say",
  aliases: []
}