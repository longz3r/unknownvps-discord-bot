const sendAPIRequest = require("../functions/sendAPIRequest")
const getUserInfo = require("../functions/getUserInfo")

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
    interaction.reply({
        content: `An email has been sent to **${userData.email}**\nMake sure to check your spam mailbox`,
        ephemeral: true
    })
}

module.exports = verifyemail