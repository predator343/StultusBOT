const Discord = require('discord.js');
const opn = require('opn');
const config = require("../config.json")

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  if (args == "help")
  {
    message.reply("type " + config.prefix + "yt [video id]. the video id is what comes after the /watch?v=");
  } else {
    console.log(message.member.user.tag + " (" + message.author.id + ") " + "opened youtube.com/watch?v=" + one);
    opn("youtube.com/watch?v=" + one);
  }
}

//name this whatever the command name is.
module.exports.help = {
  name: "yt"
}
