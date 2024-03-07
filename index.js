const {token} = require("./localconstants.json");

const discordJs = require("discord.js");

const {Client, EmbedBuilder, Intents} = discordJs;

console.log(discordJs.IntentsBitField)

const streamItClient = new Client({
    "intents": [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS]
})

streamItClient.on("message", (m) => {
    if (m.author.bot) {
        return
    }
    m.channel.send({
        embeds: [
             new discordJs.MessageEmbed({
                "title": "a response",
                "description": m.content,
             })
        ]
    })
})
streamItClient.login(token)