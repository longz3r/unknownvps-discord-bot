const sendAPIRequest = require("../functions/sendAPIRequest")

async function withdrawalInformation(interaction) {
    let token = interaction.fields.getTextInputValue('token');

    let replyMessage = "Something went wrong"

    const requestBody = {
        token: token,
        discordId: interaction.user.id
    }

    const verifyEmailResponse = await sendAPIRequest("/users/verify/token", "POST", {}, requestBody)

    if (verifyEmailResponse.data == "Verified") {
        replyMessage = "Verification successfully"
    } else {
        replyMessage = verifyEmailResponse.data
    }

    interaction.reply(replyMessage)
}

module.exports = withdrawalInformation