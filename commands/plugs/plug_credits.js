const Discord = require('discord.js');
const credits = require("../../configs/credits.json")

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
  const creditsembed = new Discord.RichEmbed()
	.setColor('#0099ff')
    .setTitle(credits.title)
    .setDescription(credits.description)
    .addField(credits.title1, credits.content1, credits.inline)
    .addField(credits.title2, credits.content2, credits.inline)
    .addField(credits.title3, credits.content3, credits.inline)
    .setFooter(credits.footer + time);

message.channel.send(creditsembed);
}

//name this whatever the command name is.
module.exports.help = {
  name: "credits",
	aliases: []
}