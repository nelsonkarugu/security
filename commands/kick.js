const Discord = require('discord.js');
const client = new Discord.Client();
const { description } = require("./ping");


module.exports = {
    name: 'kick',
    description: 'kick from server',
    execute(message, args){
        const member = message.mentions.users.first();
        if(message.member.roles.cache.has('799504688847781888'), member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick().catch(console.log);
            message.channel.send("User has been kicked");

        } else{
            message.channel.send('You could not kick that member');
        }
    }

}