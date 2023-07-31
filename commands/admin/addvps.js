const sendAPIRequest = require("../../functions/sendAPIRequest")

async function addvps(interaction) {
    const os = interaction.options.getString("os")
    const name = interaction.options.getString("name")

    const requestBody = {
        "vps_os": os,
        "vps_name": name
    }

    let response = await sendAPIRequest("/vps/add", "POST", {}, requestBody)
    interaction.reply({
        content: response.data,
        ephemeral: true
    })
}

module.exports = addvps