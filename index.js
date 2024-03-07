const {token} = require("./localconstants.json");

const discordJs = require("discord.js");

const {Client, EmbedBuilder, GatewayIntentBits} = discordJs;

console.log(discordJs.IntentsBitField)

const streamItClient = new Client({
    "intents": ["Guilds", "DirectMessages", "MessageContent", "GuildMessages"]
})

streamItClient.on("messageCreate", (message) => {
    console.log(message.content);
})

streamItClient.login(token)