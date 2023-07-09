const sendAPIRequest = require("./sendAPIRequest")

async function getUserInfo(discordId) {
    // return .data because sendAPIRequest return the whole response
    return (await sendAPIRequest(`/users/info/${discordId}`, "GET")).data
}

module.exports = getUserInfo