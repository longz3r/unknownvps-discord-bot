require('dotenv').config()

// basic shit
const { Client, GatewayIntentBits, Partials, ButtonInteraction, MessageComponentInteraction, Collection } = require('discord.js');
const client = new Client({ partials: [Partials.Channel], intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    // GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent
] });
console.time("Discord login")
client.login(process.env.BOT_TOKEN);

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`)
    console.timeEnd("Discord login")
    client.user.setActivity("people's VPS", { type: 3 });
    console.log("START UP SUCCESSFULLY")
})

const messageInteractionHandler = require("./handler/messageInteractionHandler.js")
const selectMenuHandler = require("./handler/selectMenuHandler")
const modalHandler = require("./handler/modalHandler")

client.on("interactionCreate", async (interaction) => {
    if (interaction.isCommand()) {
        messageInteractionHandler(interaction)
    } else if (interaction.isStringSelectMenu()) {
        selectMenuHandler(interaction)
    } else if (interaction.isModalSubmit()) {
        modalHandler(interaction)
    }
})