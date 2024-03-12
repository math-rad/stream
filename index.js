const { token, testingVcID } = require("./localconstants.json");

const discordJs = require("discord.js");
const voice = require("@discordjs/voice")
const { Client, Intents } = discordJs;


const streamItClient = new Client({
    "intents": [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS, Intents.FLAGS.GUILD_VOICE_STATES]
})

const radicalStream = voice.createAudioPlayer({

})




class cache {
    constructor() {
        this.cache = {}
    }

    process() {

    }

    getKey() {

    }

    get(input, key) {
        key = key || this.key(input)
        const cachedContent = this.cache[key]

        if (cachedContent) {
            return cachedContent
        }

        const content = process(input)
        this.cache[key] = content

        return [content];
    }
}

const audioResourceCache = new (class extends cache {
    /**
     * 
     * @param {discordJs.MessageAttachment} attachment 
     */
    process(attachment) {
        return voice.createAudioResource(attachment.url)
    }


    /**
     * 
     * @param {discordJs.MessageAttachment} attachment 
     * @returns 
     */
    getKey(attachment, key) {
        return attachment.url
    }
})

const attachmentCache = new (class extends cache {
    process(attachment) {
        return attachment
    }
    getKey(attachment) {
        return attachment.url;
    }
})

/**
 * 
 * @param {discordJs.MessageAttachment} attachment 
 */

streamItClient.on("message", (message) => {
    const testGuild = streamItClient.guilds.cache.get("1214779016188530728")
    const testingChannel = testGuild.channels.cache.get(testingVcID).voiceAdapterCreator

    const messageContent = message.content;
    const user = message.author;

    if (user.bot || messageContent.substring(0, 1) == ! '!') {
        return
    }

    const arguments = messageContent.substring(1).split(' ');
    const keyword = arguments.shift()

    switch (keyword) {
        case "pipe": {
            message.reply({
                "embeds": [
                    new discordJs.MessageEmbed()
                        .setTitle("stream.it ✨")
                        .setDescription("hi!")
                ]
            })
            console.log(testingCHannel.voiceAdapterCreator);
            break
        }
    }


})

streamItClient.login(token)