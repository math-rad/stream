const {token} = require("./localconstants.json");

const discordJs = require("discord.js");

const {Client, EmbedBuilder, GatewayIntentBits} = discordJs;

const streamItClient = new Client({
    "intents": [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages]
})


streamItClient.on("messageCreate", (message) => {
    if (message.author.bot) {
        return
    }
    message.reply("erm")
})

streamItClient.login(token)