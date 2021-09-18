
const Discord = require('discord.js');
require('dotenv').config();
const TOKEN = process.env.TOKEN;
const client = new Discord.Client();
const prefix = '-';//if you want to send a command, your command must start with the - symbol.
const fs = require('fs');



client.commands = new Discord.Collection();

//read commands folder
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('security is online!');         //print to console when succesfully connected to discord
});


//when someone joins the server, they are automattically added to the role "member" and they recieve a welcome message 

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'member');
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('799550713067077652').send(`Welcome <@${guildMember.user.id}> to our Among Us server! Happy gaming!`)
});



client.on('message', message => {
    // Warn users when they use innapropriate language.
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command == 'clear') {
        client.commands.get('clear').execute(message, args)
    }
    else if (command == 'ban') {
        client.commands.get('ban').execute(message, args)
    } 
    else if (command == 'kick') {
        client.commands.get('kick').execute(message, args)
    } 
    else if (command == 'mute') {
        client.commands.get('mute').execute(message, args)
    } 
    else if (command == 'unmute') {
        client.commands.get('unmute').execute(message, args)
    }
    


});
// client.on('message', message => {
//     const Words = ["fuck", "shit", "nigga", "bitch", "mother fucker", "fucker", "Fuck", "Asshole"];
//     if (message.content.charAt(0,7)) {
//         console.log("Bad words used")
//         client.commands.get('language').execute(message);
//         return
//     }
// });

// client.on('message', message => {
//     if (message.content === Words) {
//         console.log("Bad words used")
//         client.commands.get('language').execute(message, args);
//     }
// });


client.login(TOKEN);

