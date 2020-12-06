const Discord = require('discord.js')
const config = require("../config.json")

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  if (message.member.user.id = config.owner)
  {
    await message.channel.send("Cleared!");
    await console.clear();
  }
}

//name this whatever the command name is.
module.exports.help = {
  name: "cclear"
}
