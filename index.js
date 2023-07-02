// basic shit
const config = require('./config.json');
const { Client, GatewayIntentBits, Partials, ButtonInteraction, MessageComponentInteraction, Collection } = require('discord.js');
const client = new Client({ partials: [Partials.Channel], intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    // GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent
] });
console.time("Discord login")
client.login(config.token);

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`)
    console.timeEnd("Discord login")
    client.user.setActivity("tài xỉu", { type: 1 });
    console.log("START UP SUCCESSFUL")
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