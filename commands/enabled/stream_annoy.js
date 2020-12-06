var opn = require('opn')
const config = require("../../config.json")
const Discord = require('discord.js');
const { link } = require('fs');

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  if (args == "google")
  {
    console.log(message.member.user.tag + " (" + message.author.id + ") opened Google.");
    message.channel.send("Opening Google!");
    opn("https://google.com");
  }
  
  if (args == "rickroll")
  {
    console.log(message.member.user.tag + " (" + message.author.id + ") rickrolled you.");
    message.channel.send("Rickrolling...");
    opn("https://youtu.be/dQw4w9WgXcQ");
  }

  if (args == "")
  {
    message.channel.send("Please specify an argument.");
  }
}

//name this whatever the command name is.
module.exports.help = {
  name: "x"
}
