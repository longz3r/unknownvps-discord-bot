require('dotenv').config()
const process = require("process")

// basic shit
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({ partials: [Partials.Channel], intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    // GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent
] });
console.time("Discord login")
client.login(process.env.BOT_TOKEN);

const sendAPIRequest = require("./functions/sendAPIRequest")

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`)
    console.timeEnd("Discord login")
    client.user.setActivity("people's VPS", { type: 3 });
    console.log("START UP SUCCESSFULLY")
    let APIresponse = await sendAPIRequest("/ping", "GET")
    try {
        if (APIresponse.data.message == "Pong!") {
            console.log(`API response time: ${APIresponse.headers["x-response-time"]}`)
        } else {
            console.log("API TEST FAILED TERMINATING IN 5 SECONDS")
            setTimeout(() => {
                process.exit(1)
            }, 5000)
        }
    } catch (err) {
        if (APIresponse == undefined) {
            console.log("API TEST FAILED TERMINATING IN 5 SECONDS")
            setTimeout(() => {
                process.exit(1)
            }, 5000)
        }
    }
})

const messageInteractionHandler = require("./handler/messageInteractionHandler.js")
const selectMenuHandler = require("./handler/selectMenuHandler")
const modalHandler = require("./handler/modalHandler")
const userCommmandHandler = require("./handler/userCommandHandler")

client.on("interactionCreate", async (interaction) => {
    if (interaction.isCommand()) {
        if (interaction.isChatInputCommand()) {
            messageInteractionHandler(interaction)
        } else if (interaction.isUserContextMenuCommand()) {
            userCommmandHandler(interaction)
        }
    } else if (interaction.isStringSelectMenu()) {
        selectMenuHandler(interaction)
    } else if (interaction.isModalSubmit()) {
        modalHandler(interaction)
    }
})