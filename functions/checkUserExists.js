const getUserInfo = require("./getUserInfo")

async function checkUserExists(discordId) {
    let userData = await getUserInfo(discordId)
    if (userData == "User not found")  {
        return false
    }
    return true
}

module.exports = checkUserExists