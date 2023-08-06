const sendAPIRequest = require("../../functions/sendAPIRequest")

async function addvps(interaction) {
    const os = interaction.options.getString("os")
    const name = interaction.options.getString("name")
    const user = interaction.options.getString("user")
    const pass = interaction.options.getString("pass")
    const ip = interaction.options.getString("ip")

    const requestBody = {
        "vps_os": os,
        "vps_name": name,
        "vps_pass": pass,
        "vps_user": user,
        "vps_ip": ip
    }

    let response = await sendAPIRequest("/vps/add", "POST", {}, requestBody)
    interaction.reply({
        content: response.data,
        ephemeral: true
    })
}

module.exports = addvps