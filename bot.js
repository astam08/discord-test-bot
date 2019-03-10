In ur bot.js file, we'll start off simple. (all code can be found in description)
all the // are just comments
---------------------------------------------------------------------------------
var discord = require('discord.js') //this is our discord.js library
var client = new discord.client()
var prefix = '?' //this is ur bot's prefix. change it to whatever you want
client.on('message', async message => { //this is an event. it triggers
                                                                                 //whenever the bot reads a message
var command = message.content.slice(prefix.length).trim().split(/ +/g).shift.toLowerCase();

if (command === "hi")
message.channel.send('hi there') //sends hi in the channel the command was sent in

});

client.login('YOUR-BOTS-TOKEN-HERE')
