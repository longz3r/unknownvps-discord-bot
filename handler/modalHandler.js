const verifyEmail = require("../modalSubmit/verifyEmail")

async function modalHandler(interaction) {
    console.log(`${interaction.user.tag} submitted modal ${interaction.customId}`)
    command = eval(interaction.customId)
    command(interaction)
}

module.exports = modalHandler