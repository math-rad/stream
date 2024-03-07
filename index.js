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
    if (content.sub(0, 1) != "!") {
        return 
    }

    const guild = m.channel.guild;

    const arguments = content.substring(1).split(' ')

    switch(arguments[0]) {
        case "record": {
            const attachment = m.attachments.array()[0]
            const name = arguments[1]

            if (!attachment) {
                return m.reply("please add an attachment to record")
            }

            makeAudioResource(attachment, (name != '' && name != null) && name)

            return m.reply("recorded!")
        }

        case "play": {
            const name = arguments[1]


            /**
             *  @type {voice.AudioResource} 
             */
            const audio = audioResourceCache.get(name)
            const connection = voice.joinVoiceChannel({
                channelId: require("./localconstants.json").testingVcID,
                guildId: m.guild,
                adapterCreator: guild.voiceAdapterCreator
            })

            connection.subscribe(radicalStream)

            m.reply("playing!")

        
        }
    }

})
streamItClient.login(token)