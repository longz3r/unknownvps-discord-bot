const axios = require("axios")
require('dotenv').config()

function sendMessageToChannel(channelId, message, embeds, components) {
    const data = {
        "content": message,
        "embeds": embeds,
        "components": components
    }

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bot ${process.env.BOT_TOKEN}`
    }

    axios.post(`https://discord.com/api/v10/channels/${channelId}/messages`, data, {
        headers: headers
    }).catch(err => {
        console.error(err)
    })
}

module.exports = sendMessageToChannel