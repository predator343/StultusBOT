const Discord = require('discord.js');

const config = require("../configs/global.json");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  const embed = new Discord.RichEmbed();

  function format(seconds){
    function pad(s){
      return (s < 10 ? '0' : '') + s;
    }
    var hours = Math.floor(seconds / (60*60));
    var minutes = Math.floor(seconds % (60*60) / 60);
    var seconds = Math.floor(seconds % 60);
  
    return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
  }

  var uptime = process.uptime();

  embed.setColor('RANDOM');
  embed.addField("Uptime:", format(uptime), true);

  message.delete();
  message.channel.send(embed);

}

//name this whatever the command name is.
module.exports.help = {
  name: 'uptime',
  aliases: []
}