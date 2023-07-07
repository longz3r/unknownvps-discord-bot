const sendAPIRequest = require("../functions/sendAPIRequest")

async function verifyemail(interaction) {
    // await sendAPIRequest("/verifyemail", "POST", {}, {
    //     email = userEmail
    // })
    interaction.reply("verify email command")
}

module.exports = verifyemail