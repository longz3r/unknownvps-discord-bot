// const withdrawalInformation = require("../modalSubmit/withdrawalInformation")

async function modalHandler(interaction) {
    console.log(`${interaction.user.tag} submitted modal ${interaction.customId}`)
    command = eval(interaction.customId)
    command(interaction)
}

module.exports = modalHandler