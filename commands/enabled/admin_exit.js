const Discord = require('discord.js')
const config = require("../../config.json")
const env = require('dotenv')

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  if (message.member.user.id == process.env.OWNER)
  {
    await message.channel.send("bot is going offline!");
    await bot.user.setActivity('discord.js', { type: 4 });
    await process.exit(1);
  } else {
    message.channel.send("only the bot owner can do this.");
  }
}

//name this whatever the command name is.
module.exports.help = {
  name: "stop",
  aliases: []
}
