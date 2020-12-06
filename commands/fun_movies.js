const Discord = require('discord.js');
const opn = require('opn');
const movies = require("./files/movies.json")

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  if (args == "") {
    const moviesembed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle(movies.title)
    .addField(movies.fieldtitle1, movies.fieldcontent1, movies.inline)
    .addField(movies.fieldtitle2, movies.fieldcontent2, movies.inline)
    .addField(movies.fieldtitle3, movies.fieldcontent3, movies.inline)
    .setFooter(movies.footer);
    
    message.channel.send(moviesembed);
    }

    if (args == "suggest") {
        message.channel.send("Send suggestions to Faulty!");
    }

    
}

//name this whatever the command name is.
module.exports.help = {
  name: "movies"
}