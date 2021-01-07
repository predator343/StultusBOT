const Discord = require('discord.js');
const help = require('../../configs/help.json');

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
  const stream = new Discord.RichEmbed()
	.setColor('#0099ff')
    .setTitle("Livestream")
    .setDescription("The link to the almighty livestream.")
    .addField("Link", "https://twitch.tv/LiveStultus", false)
    .setFooter(help.footer + time);

  message.reply(stream); 
}

//name this whatever the command name is.
module.exports.help = {
  name: "twitch",
	aliases: []
}