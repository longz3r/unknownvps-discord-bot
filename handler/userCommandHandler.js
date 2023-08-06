const ListVPS = require("../commands/userCommands/List VPS")
const Userinfo = require("../commands/userCommands/User info")

async function userCommmandHandler(interaction) {
    allowedUser = ["823863369060581384", "744091948985614447"]
    if (!allowedUser.includes(interaction.user.id) && interaction.user.id != interaction.targetId) {
        console.log(`${interaction.user.tag} tried to use ${interaction.commandName} but failed`)
        interaction.reply({
            content: "You don't have enough permission to use this command",
            ephemeral: true
        })
    } else {
        console.log(`${interaction.user.tag} executed ${interaction.commandName}`)
        command = eval(interaction.commandName.replace(/\s+/, ""))
        command(interaction)
    }
}

module.exports = userCommmandHandler