const Discord = require('discord.js');
const opn = require('opn');
const help = require("../configs/help.json")
const config = require('../../config.json')

var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();

if (minute < 10) {
var time = " | " + hour + ":0" + minute;
} else {
var time = " | " + hour + ":" + minute;
}

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  const helpembed = new Discord.RichEmbed()
	  .setColor('#0099ff')
    .setTitle(help.title)
    .setDescription(help.description)
    .addField(config.prefix + help.title1, help.content1, help.inline)
    .addField(config.prefix + help.title2, help.content2, help.inline)
    .addField(config.prefix + help.selft, help.selfc, help.inline)
    .setFooter(help.footer + time);

message.channel.send(helpembed);
}

//name this whatever the command name is.
module.exports.help = {
  name: "help"
}