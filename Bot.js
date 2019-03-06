var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = "+" //The text before commands, you can put anything that you prefer

message.delete();
    if(message.author.id != "552731436591874049" && message.channel.id === "381397780385628181"){
        if(msg.startsWith('+', 0)){
            if(msg === prefix + "accuracyloco10" && message.channel.id === "381397780385628181"){
                message.channel.send('Only Trivia's Official Result
                Loco 
                10/10
                All Won 
                last ✔️') // Sends a message to the channel, with the content
            }
            else{
                message.channel.send("Hey, I only understand >bang right now. More will be added when my creator is free. :) ")
            }
        }
        else{
            message.delete();
            message.channel.send(sender + " this bot only accepts commands which starts with '>' dot.");
        }
           });
bot.login(process.env.BOT_TOKEN)
    


