

var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = "+" //The text before commands, you can put anything that you prefer

    if(message.author.id != "552731436591874049" && message.channel.id === "536913505283211276"){
        if(msg.startsWith('+', 0)){
            if(msg === prefix + "help" && message.channel.id === "536913505283211276"){
                message.channel.send('Welcome To Only Trivia Answers At That Time Bot Is On Rest And In maintenance So Please DM To Admin Thanks') // Sends a message to the channel, with the content
            }
            else{
                message.channel.send("Hey, I only understand +help right now. More will be added when my creator is free. :) ")
            }
        }
        else{
            message.delete();
            message.channel.send(sender + " this bot only accepts commands which starts with '+' Plus.");
        }
    }
});

bot.login(process.env.BOT_TOKEN)
