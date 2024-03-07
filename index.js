const { token } = require("./localconstants.json");

const discordJs = require("discord.js");
const voice = require("@discordjs/voice")

const { Client, EmbedBuilder, Intents } = discordJs;


const streamItClient = new Client({
    "intents": [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS]
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
        const key = key || this.key(input)
        const cachedContent = this.cache[key]

        if (cachedContent) {
            return cachedContent
        }

        const content = process(input)
        this.cache[key] = content

        return content;
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

const attachmentCache = new (class extends cache{
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

function makeAudioResource(attachment, key) {
    return audioResourceCache.get(attachment.key)
}


streamItClient.on("message", (m) => {
    if (m.author.bot) {
        return
    }

    const content = m.content;

    if (content.substring(0, 1) === '!') {
        const arguments = content.substring(1).split('!')

        switch (arguments[0]) {
            case "record": {
                const attachment = m.attachments.array()[0]
                if (!attachment) {
                    return
                }

                const name = arguments[1]
                makeAudioResource(attachment, (name != '' && name != null) && name)
                attachmentCache.get()

                m.reply(`Recorded audio as ${name || attachment.url}`)
                break
            }

            case "send": {
                const attachment = audioResourceCache.cache[arguments[0]]
                if (!attachment) {
                    m.reply("no recorded value found")
                    break
                }

                m.reply({
                    "attachments": [attachment.url]
                })
            }
        }
    }
})
streamItClient.login(token)