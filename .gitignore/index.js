const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!")

bot.on('ready', function() {
    bot.user.setGame("Command: :help");
    console.log("Connected");
]);

bot.login(NjExMjE5MTg1OTA0Nzc5Mjc3.XVQojg.A-8SdU9GpK0u_CFQ3uyzwZQeuIM);


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n !tt \n !fabriquant");
    }

    if (message.content === prefix + "tt"){
        message.channel("Création du bot le _14/08/2019_à_17h34_");
        console.log("Commande effectué");
    }

    if (message.content === prefix + "fabriquant"){
        message.reply("_Ce bot a été crée par antoine_");
        console.log("Commande effectué");
    ]
])
