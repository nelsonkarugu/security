module.exports = {
    name: 'unmute',
    description: 'unmute member',
    execute(message, args) {
        const target = message.mentions.users.first();
        if (message.member.permissions.has("MUTE_MEMBERS"), target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member')
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute')

            let memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted!`);
            

        } else {
            message.channel.send('I cant find that member, please try again!')
        }


    }

}