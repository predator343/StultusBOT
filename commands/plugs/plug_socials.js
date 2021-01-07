const Discord = require('discord.js');
const opn = require('opn');
const socials = require("../configs/socials.json")

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
  const socialsembed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle(socials.title)
    .addField(socials.fieldtitle1, socials.fieldcontent1, socials.inline)
    .addField(socials.fieldtitle2, socials.fieldcontent2, socials.inline)
    // .addField(socials.fieldtitle3, socials.fieldcontent3, socials.inline)
    .setFooter(socials.footer + time);

message.reply(socialsembed);

}

//name this whatever the command name is.
module.exports.help = {
  name: "socials",
	aliases: []
}