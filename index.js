const {token} = require("./localconstants.json");

const discordJs = require("discord.js");

const {Client, EmbedBuilder, Intents} = discordJs;

console.log(discordJs.IntentsBitField)

const streamItClient = new Client({
    "intents": [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES]
})

streamItClient.on("messageCreate", (message) => {
    console.log(message.content);
})

streamItClient.login(token)