const Discord = require("discord.js")
require('dotenv').config()
const global = require("./commands/configs/global.json")
const fs = require("fs")
const bot = new Discord.Client();
const main = require('./exports');

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

if(process.env.TOKEN === "setmeplease") return console.log("[!] Set your token up! Go to https://www.discordapp.com/developers and generate a token from a bot user.");

console.clear()
console.log("xBOT CONSOLE")
console.log("------------")

fs.readdir("./commands/enabled", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");

  if(jsfile.length <= 0){
    console.log("[!] Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
      let props = require(`./commands/enabled/${f}`);
      console.log(`[*] ${f} loaded!`);
      bot.commands.set(props.help.name, props);
      props.help.aliases.forEach(alias => {
      bot.aliases.set(alias, props.help.name);
    });
  });

  console.log("------------");

});

bot.on("ready", () => {
  console.log("[!] " + bot.user.username + " is online.")
  bot.user.setActivity(global.name, {
    type: global.presence // WATCHING, STREAMING, LISTENING OR PLAYING set it in global.json
  });
});

bot.on("message", async message => {
  //a little bit of data parsing/general checks
  if (message.content.indexOf(global.prefix) !== 0) return;
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  let content = message.content.split(" ");
  let command = content[0];
  let args = content.slice(1);
  let prefix = global.prefix;


  //checks if message contains a command and runs it
  const commandfile = bot.commands.get(command.slice(prefix.length)) || bot.commands.get(bot.aliases.get(command.slice(prefix.length)));
  if(commandfile) commandfile.run(bot,message,args);
})

bot.login(process.env.TOKEN) // change your token in the global.json