const Discord = require('discord.js');
const got = require('got');

module.exports.run = async (bot, message, args) => {
	const embed = new Discord.RichEmbed();
	got('https://github.com/codeducks/xBOT/raw/master/commands/configs/devlog.json') 
        .then(response => {
			const [list] = JSON.parse(response.body);
			const [post] = list.data.children;

            const lastupdate = post.data.lastupdate;
            const lastfeature_t = post.data.lastfeature_title;
            const lastfeature_c = post.data.lastfeature_content;

            embed.setTitle(`${lastupdate}`);
            embed.addField(`${lastfeature_t}`, `${lastfeature_c}`, false)
			embed.setColor('RANDOM');

			message.channel.send(embed);
		})
		.catch(console.error);
};

module.exports.help = {
	name: "devlog",
	aliases: ['botupdates', 'whatsnew']
};