const sendAPIRequest = require("../functions/sendAPIRequest")
const getUserInfo = require("../functions/getUserInfo")

const verifyModal = require("../data/modal/verifyEmail")

async function verifyemail(interaction) {
    let userData = await getUserInfo(interaction.user.id)
    if (userData.verified == "true") {
        interaction.reply("You already verified your email")
        return
    }
    
    await sendAPIRequest("/users/verify/mail", "POST", {}, {
        "discordId": interaction.user.id,
        "email": userData.email
    })

    interaction.showModal(verifyModal)
}

module.exports = verifyemail