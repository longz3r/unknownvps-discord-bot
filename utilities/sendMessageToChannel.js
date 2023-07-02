const axios = require("axios")
const config = require("../config.json")

function sendMessageToChannel(channelId, message, embeds, components) {
    const data = {
        "content": message,
        "embeds": embeds,
        "components": components
    }

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bot ${config.token}`
    }

    axios.post(`https://discord.com/api/v10/channels/${channelId}/messages`, data, {
        headers: headers
    }).catch(err => {
    })
}

module.exports = sendMessageToChannel