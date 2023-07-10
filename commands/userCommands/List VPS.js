const getUserInfo = require("../../functions/getUserInfo")
const checkUserExists  = require("../../functions/checkUserExists")

async function listvps(interaction) {
    if (!await checkUserExists(interaction.targetId)) {
        interaction.reply({
            content: "User wasn't registered"
        })
        return
    }
    let userData = await getUserInfo(interaction.targetId)
    let fields = [
        {
            name: interaction.targetId,
            value: userData.email
        },
        {
            name: `**${userData.vps.length - 1}** avaliable VPS`,
            value: ""
        }
    ]

    for (vps of userData.vps) {
        if (vps.id == "N/A") continue
        fields.push(
            {
                name: vps.id,
                value: "ngu"
            }
        )
    }

    const listVPSembed = {
        color: 0x0099ff,
        title: 'Unknown VPS',
        // url: 'https://discord.js.org',
        author: {
            name: 'User info',
            icon_url: 'https://i.imgur.com/AfFp7pu.png',
            url: 'https://discord.js.org',
        },
        // description: 'Some description here',
        thumbnail: {
            url: 'https://i.imgur.com/AfFp7pu.png',
        },
        fields: fields,
        timestamp: new Date().toISOString(),
        footer: {
            text: '©️Unknown VPS 2023',
            icon_url: 'https://i.imgur.com/AfFp7pu.png',
        },
    };

    interaction.reply({embeds: [listVPSembed], ephemeral: true})
}

module.exports = listvps