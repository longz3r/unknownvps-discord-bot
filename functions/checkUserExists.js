const sendAPIRequest = require("./sendAPIRequest")

async function checkUserExists(discordId) {
    let userData = await sendAPIRequest(`/users/${discordId}`, "GET")
    if (userData.data == "User not found")  {
        return false
    }
    return true
}

module.exports = checkUserExists