const Discord = require('discord.js');
const global = require("../../configs/global.json");
const yarn = require("../../package.json");
const exp = require('../../exports')
const env = require('dotenv');
const got = require('got');

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
    const embed = new Discord.MessageEmbed();

    var loadedModules = [global.defaultmodulename]

    const user = message.guild.members.cache.get(process.env.OWNER);
    //const userTag = `${user.username}#${user.discriminator}`;

    if(args[0] == "-h") {
      const embed = new Discord.MessageEmbed();
      embed.setColor('RANDOM');
      embed.setTitle(exports.help.name + " help.");
      embed.addField("layout:", config.prefix + exports.help.name + " (changelog)", false);
      embed.addField("purpose:", "either show the bot info or changelog", false);
      message.channel.send(embed);
      return;
  
    }

    if(args[0] == "load"){

      if(message.author.id != process.env.OWNER) {
        message.channel.send("You can't load modules, you are not the bot owner.");
        return;
      }

      if(args[1] == "all"){
        const testFolder = './commands';
        const fs = require('fs');

        var modules = []

        fs.readdir(testFolder, (err, files) => {
          message.channel.send("Loading...");

          files.forEach(file => {
            if(file == global.defaultmodulename) {
              return
            } else {
            exp.load(file);
            }
          });
          message.channel.send("Loaded " + args[0]);
        });
        return
      }

      if(exp.check(args[1]) == true) {
        message.channel.send("Loading...");
        exp.load(args[1]);
        message.channel.send("Loaded " + args[0]);
      } else {
        message.channel.send();
      }
      return;

    }

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

    if (args[0] == "changelog" ) {
      const embed = new Discord.MessageEmbed();
      embed.setTitle("Changelog");
      embed.setColor('RANDOM');
      embed.addField("Link to the changelog", global.changelog, false);

      embed.setTimestamp();

      message.channel.send(embed);
      return;

    } else {
      const embed = new Discord.MessageEmbed();
        embed.setTitle("Bot Info");
        embed.setColor('RANDOM');
        embed.addField( "Bot Owner" , user, true);
        embed.addField("Uptime:", format(uptime), true);
        embed.addField("Version:", yarn.version, true);
        // embed.addField("Loaded Modules:", loadedModules.join(", "), false); // ! maybe later.
        embed.addField("Bot Commands", global.cmds, false);
        if(process.env.CLIENTID) embed.addField("Invite:", "https://discord.com/api/oauth2/authorize?client_id=" + process.env.CLIENTID + "&permissions=8&scope=bot")

        embed.setTimestamp();

        message.channel.send(embed);
        return;
    }
}

//name this whatever the command name is.
module.exports.help = {
  name: 'info',
  aliases: ['bot']
}