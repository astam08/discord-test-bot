var Discord = require('discord.js'); //our discord.js library
var client = new Discord.Client(); //our bot client
var prefix = '?'; //ur bot's prefix

client.on('message', async message => { //this is a message event. it triggers when someone sends a message in a dm or server channel.

var args = message.content.slice(prefix.length).trim().split(/ +/g) 

//this is args, the arguments in commands. For example, 
//?skiddle doodle you're now a noodle 
// would return ["doodle", "you're", "now", "a", "noodle"]

var command = args.shift().toLowerCase();

//this is our command. it can be any word with our prefix, for example: `?ping` 
//the command in this case is `ping`

if (command === "ping") { //if you type ?ping in a channel or in the bots dm

message.channel.send('pong!') //sends pong! back

}

});

 client.login('NTU0NDM3NTQ2OTU2OTQ3NDU4.D2gwxQ.87tCGGYC7MZSTy7UNOkexedTnfQ'); //this is the token you get from discords dev portal. it logs in ur bot for you.
