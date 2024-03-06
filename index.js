const { Client, REST, GatewayIntentBits, EmbedBuilder, SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType, Routes } = DiscordJs

const TOKEN = process.env.TOKEN;

const radClient = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages]
})

console.log(TOKEN);