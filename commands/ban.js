const Discord = require('discord.js');
const client = new Discord.Client();
const { description } = require("./ping");

module.exports = {
    name: 'ban',
    description: 'ban from server',
    execute(message, args){
        const member = message.mentions.users.first();
        if(message.member.permissions.has("BAN_MEMBERS"), member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban().catch(console.log);
            message.channel.send("User has been banned");

        } else{
            message.channel.send('you cannot ban that member');
        }
    }

}