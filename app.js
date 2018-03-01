const Discord = require('discord.js');

const bot = new Discord.Client;

const token = `NDA3MTc1NTI5NjcwNzcwNjg5.DU9rTg.wDgTCL5oCu00g0Y20-FdXP_lgQw`

bot.on("message", async message => {
    if(message.content === `ping!`){
        message.channel.send(`pong!`);
    };
});

bot.login(token);