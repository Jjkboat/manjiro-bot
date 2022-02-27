const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTQ2OTAzMTg2NzY0MDk1NTM5.YhleUA.72E613MGW-wMxubJvYtNNxH-krQ"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "ping"){
        message.reply("pong")
    }
})

client.login(process.env.TOKEN)