const Discord = require('discord.js');
const config = require("../../config.json");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
   if (message.member.hasPermission('MANAGE_MESSAGES')) {
       if (args[0] > 100){
        message.reply("You can only delete 100 messages at a time!");
       } else {
        message.delete();
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