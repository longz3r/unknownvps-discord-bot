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
const getUserInfo = require("../functions/getUserInfo")

const info = require("../commands/info")
const listvps = require("../commands/listvps")
const createvps = require("../commands/createvps")
const register = require("../commands/register")
const verifyemail = require("../commands/verifyemail")

//admin slash commands
const addvps = require("../commands/admin/addvps")

const adminCommands = ["addvps"]
const allowedUser = ["823863369060581384", "744091948985614447"]

async function messageInteractionHandler(interaction) {
    console.log(`${interaction.user.tag} executed ${interaction.commandName}`)
    let userData = await getUserInfo(interaction.user.id)
    if (userData == "User not found" && interaction.commandName != "register") {
        interaction.reply("Please register before using this command by using **/register**")
        return
    } else if (userData.verified == "false" && interaction.commandName != "verifyemail") {
        interaction.reply("Please verify your email before using this command by using **/verifyemail**")
    } else if (!adminCommands.includes(interaction.commandName)) {
        command = eval(interaction.commandName)
        command(interaction)
    } else {
        if (!allowedUser.includes(interaction.user.id)) {
            interaction.reply({
                content: "You are not allowed to use this command",
                ephemeral: true
            })
        } else {
            command = eval(interaction.commandName)
            command(interaction)
        }
    }
}

module.exports = messageInteractionHandler