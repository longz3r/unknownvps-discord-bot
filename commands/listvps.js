const getUserInfo = require("../functions/getUserInfo")

async function listvps(interaction) {
    let userData = await getUserInfo(interaction.user.id)
    let fields = [
        {
            name: (interaction.user.tag).split("#")[0],
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