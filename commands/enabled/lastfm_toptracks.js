const Discord = require('discord.js');
const aLastFM = require('last-fm')
const lastfm = new aLastFM('12d077b9e7c9bfdb1fe403aac1b8122e', { userAgent: 'xBOT/1.0.0 (x.com)' })

const config = require("../../config.json");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
    lastfm.geoTopTracks({country: args[0], limit: "10"}, (err, data) => {
    if (err) message.reply("uhm, this is awkward... it does not seem to be working.")
    else {
      const embed = new Discord.RichEmbed();
      
        embed.setTitle("results")
        .addField(data.track[0].name, data.track[0].url, false)
        .addField(data.track[1].name, data.track[1].url, false)
        .addField(data.track[2].name, data.track[2].url, false)
        .addField(data.track[3].name, data.track[3].url, false)
        .addField(data.track[4].name, data.track[4].url, false)
        .addField(data.track[5].name, data.track[5].url, false)
        .addField(data.track[6].name, data.track[6].url, false)
        .addField(data.track[7].name, data.track[7].url, false)
        .addField(data.track[8].name, data.track[8].url, false)
        .addField(data.track[9].name, data.track[9].url, false);
        
    }
    message.reply(embed);
  })
  
}

//name this whatever the command name is.
module.exports.help = {
  name: 'fm',
  aliases: []
}