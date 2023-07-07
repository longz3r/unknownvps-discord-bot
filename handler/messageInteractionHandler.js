// const command = require("./../commands/")

// const register = require("../commands/register")
// const deposit = require("../commands/deposit")
// const code = require("../commands/code")
// const balance = require("../commands/balance")
// const bet = require("../commands/bet")
// const loc = require("../commands/loc")
// const settings = require("../commands/settings")
// const withdraw = require("../commands/withdraw")
// const howto = require("../commands/howto")

const checkUserExists = require("../functions/checkUserExists")

const info = require("../commands/info")
const listvps = require("../commands/listvps")
const createvps = require("../commands/createvps")
const register = require("../commands/register")
const verifyemail = require("../commands/verifyemail")



async function messageInteractionHandler(interaction) {
    console.log(`${interaction.user.tag} executed ${interaction.commandName}`)
    if (!await checkUserExists(interaction.user.id) && interaction.commandName != "register") {
        interaction.reply("Please register before using this command by using /register")
    } else {
        command = eval(interaction.commandName)
        command(interaction)
    }
}

module.exports = messageInteractionHandler