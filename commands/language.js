const Discord = require('discord.js');
const { Message } = require("discord.js")
const client = new Discord.Client();


module.exports = {
    name: 'language',
    description: "Warn users about using inappropriate language",
    execute(message) {
        

        if (message.member.roles.cache.has('854149349716787211')) {
            

        } else {
            message.reply("Do not use inappropriate words on this server or you will be banned!");
        }
       
        
    }
 }
  