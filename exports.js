const fs = require("fs");
const Discord = require('discord.js');
const main = require("./exports");
const config = require("./configs/global.json");
require("dotenv").config();
const crypto = require("crypto");
const got = require('got');

exports.timestamp = function() {
	const dateOb = new Date();
	const hours = dateOb.getHours();
	const minutes = dateOb.getMinutes();
	const seconds = dateOb.getSeconds();
	return (main.date() + " " + hours + ":" + minutes + ":" + seconds);
};

exports.date = function() {
	const dateOb = new Date();
	const date = ("0" + dateOb.getDate()).slice(-2);
	const month = ("0" + (dateOb.getMonth() + 1)).slice(-2);
	const year = dateOb.getFullYear();
	return date + "-" + month + "-" + year;
};

exports.log = function(content) {
    // logging function
    try {
	fs.appendFileSync(`./logs/${main.date()}.txt`, `\n [${main.timestamp()}] ${content}`, error => {
		// logging function
		if (error) {
			console.error("Error on Logging: " + error);
			process.exit("LOG_ERROR");
		}
    });
    } catch {
        if (fs.existsSync('./logs')) {
            fs.writeFile(`./logs/${main.date()}.txt`,"log created", error => {
                // logging function
                if (error) {
                    console.error("Error on Logging: " + error);
                    process.exit("LOG_ERROR");
                }
            });
            return
        } else {
            fs.mkdirSync('./logs');
            fs.writeFile(`./logs/${main.date()}.txt`,"log created", error => {
                // logging function
                if (error) {
                    console.error("Error on Logging: " + error);
                    process.exit("LOG_ERROR");
                }
            });
            return
        }
    } 
	console.log(content)
	return;
};

exports.silent_log = function(content) {
    // logging function
    try {
	fs.appendFileSync(`./logs/${main.date()}.txt`, `\n [${main.timestamp()}] ${content}`, error => {
		// logging function
		if (error) {
			console.error("Error on Logging: " + error);
			process.exit("LOG_ERROR");
		}
    });
    } catch {
        if (fs.existsSync('./logs')) {
            fs.writeFile(`./logs/${main.date()}.txt`,"log created", error => {
                // logging function
                if (error) {
                    console.error("Error on Logging: " + error);
                    process.exit("LOG_ERROR");
                }
            });
            return
        } else {
            fs.mkdirSync('./logs');
            fs.writeFile(`./logs/${main.date()}.txt`,"log created", error => {
                // logging function
                if (error) {
                    console.error("Error on Logging: " + error);
                    process.exit("LOG_ERROR");
                }
            });
            return
        }
    }
	return;
};

exports.stats = function(content) {
    // logging function
    try {
	fs.appendFileSync(`./logs/stats/${main.date()}.txt`, `${content}`, error => {
		// logging function
		if (error) {
			console.error("Error on storing stats: " + error);
			process.exit("LOG_ERROR");
        }
        return;
    });
    } catch {
        if (fs.existsSync('./logs/stats')) {
            fs.writeFile(`./logs/stats/${main.date()}.txt`,"log created", error => {
                // logging function
                if (error) {
                    console.error("Error when storing stats: " + error);
                    process.exit("LOG_ERROR");
                }
            });
            return;
        } else {
            fs.mkdirSync('./logs/stats');
            fs.writeFile(`./logs/stats/${main.date()}.txt`,"stat file created", error => {
                // logging function
                if (error) {
                    console.error("Error on storing stats: " + error);
                    process.exit("LOG_ERROR");
                }
            });
            return;
        }
    }
	return;
};

exports.hash = function(content, type) {
    return crypto.createHash(type).update(content).digest("hex");
};

exports.check = function(folder){
    if (fs.existsSync(`./commands/${folder}`)){
        return true;
    } else {
        return false;
    }
};

exports.load = function(folder){

    const index = require('./index')

    if (fs.existsSync(`./commands/${folder}`)) {
        fs.readdir(`./commands/${folder}`, (err, files) => {
        if(err) console.log(err);
      
        let jsfile = files.filter(f => f.split(".").pop() === "js");
      
        if(jsfile.length <= 0){
          console.log("[!] Couldn't find commands.");
          return;
        }
      
        jsfile.forEach((f, i) =>{
            let props = require(`./commands/${folder}/${f}`);
            index.loadCommand(props.help.name, props);
            props.help.aliases.forEach(alias => {
            index.loadAlias(alias, props.help.name);
            });
            console.log(`[*] ${f} loaded!`);
        });
        })
    } else {
    console.log('tried to load ' + folder + ' but could not find it.')
    }
};

exports.initlog = function() {
    const idate = main.date()
    const path = "./logs"

    if (fs.existsSync(path)) {
        if (fs.existsSync(`./logs/${idate}.txt`)){
            return;
        } else {
            fs.writeFile(path + "/" + idate + ".txt", "LOG INIT", (err) => {
                if (err) {
                    console.log("Error catched: " + err);
                    process.exit("ERR");
                }
            });
            return;
        }
    } else {
        fs.mkdirSync(path).catch((err) => {
            if (err) {
                console.log(err);
                process.exit("err");
            }
        });
        return;
    }
}