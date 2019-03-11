var discord = require('discord.js') //our discord.js library
var client = new discord.client()  //our bot client
var prefix = '?' //ur bot's prefix

client.on('message', async message => { //this is a message event. it triggers when someone sends a message in a dm or server channel.

var command = message.content.slice(prefix.length).trim().split(/ +/g).shift.toLowerCase();
//this is our command. it can be any word with our prefix, for example: `?ping` 
//the command in this case is `ping`

if (command === "ping") { //if you type ?ping in a channel or in the bots dm

message.channel.send('pong!') //sends pong! back


}




})
 client.login('UR-BOTS-TOKEN-HERE') //this is the token you get from discords dev portal. it logs in ur bot for you.
