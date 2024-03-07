const {token} = require("./localconstants.json");

const discordJs = require("discord.js");

const {Client, EmbedBuilder, GatewayIntentBits} = discordJs;

console.log(discordJs.IntentsBitField)

const streamItClient = new Client({
    "intents": ["Guilds", "DirectMessages", "MessageContent", "GuildMessages"]
})

streamItClient.on("messageCreate", (message) => {
    if (message.author.bot) {
        return
    }
    message.reply("erm")
})

streamItClient.login(token)