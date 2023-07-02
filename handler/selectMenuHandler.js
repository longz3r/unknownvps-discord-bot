// const howto = require("../selectMenus/howto")
// const settings = require("../selectMenus/settings")

async function selectMenuHandler(interaction) {
    if (interaction.user.id == interaction.message.interaction.user.id) {
        await interaction.deferUpdate()
        console.log(`${interaction.user.tag} selected ${interaction.values} in ${interaction.message.interaction.commandName}`)
        let commandName = interaction.message.interaction.commandName.split(/\s+/)

        command = eval(commandName[0])
        if (commandName.length == 1) {
            command(interaction)
        } else {
            command(interaction, commandName[1])
        }
    }
}

module.exports = selectMenuHandler