const { Message } = require("discord.js")

module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args) {

        if (message.member.permissions.has("KICK_MEMBERS")) {
            message.channel.send('You have the permission to kick members')
        };

        if (message.member.roles.cache.has('799504688847781888')) {
            message.channel.send('Security bot is online and operational!');

        } else {
            message.channel.send('I see you dont have the right permissions, please contact the moderator!');
        }
    }
}