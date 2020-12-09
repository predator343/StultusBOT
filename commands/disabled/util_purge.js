const Discord = require('discord.js');
const config = require("../../config.json");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
   if (message.author.hasPermission('Administrator'))
   {
    var nmr = args.join("");
    message.delete();
    message.channel.bulkDelete(nmr);
   }
   // GIVES WEIRD ERROR WHEN YOU HAVE NO PERMS FOR IT!
}

//name this whatever the command name is.
module.exports.help = {
  name: "del"
}