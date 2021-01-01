const Discord = require('discord.js');
const main = require('../../exports');


module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes

  if(args[0] == "-h") {

    embed.setColor('RANDOM');
    embed.setTitle(exports.help.name + " help.");
    embed.addField("layout:", config.prefix + exports.help.name + " [1-100]", false);
    embed.addField("purpose:", "Deletes 1-100 messages.", false);
    message.channel.send(embed);
    return;

  }

   if (message.member.hasPermission('MANAGE_MESSAGES')) {
       if (args[0] > 100){
        message.reply("You can only delete 100 messages at a time!");
       } else {
        message.delete();
        main.stats(args[0] + " messages were deleted.");
        message.channel.bulkDelete(args[0]);
    }
  } else {
      message.reply("You do not have permission to execute this command!");
  }
}

//name this whatever the command name is.
module.exports.help = {
  name: "del",
  aliases: ['delete', 'purge']
}