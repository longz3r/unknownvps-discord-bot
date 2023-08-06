const getUserInfo = require("../functions/getUserInfo")
const getVpsInfo = require("../functions/getVpsInfo")

async function listvps(interaction) {
    let userData = await getUserInfo(interaction.user.id)
    let vpsData = await getVpsInfo(userData.vps.id)
    let fields = [
        {
            name: interaction.user.tag,
            value: userData.email
        },
        {
            name: `ID`,
            value: userData.vps.id,
            inline: true,
        }, 
        {
            name: `Name`,
            value: vpsData.name,
            inline: true,
        },
        {
            name: `OS`,
            value: vpsData.os,
            inline: true,
        },
        {
            name: "",
            value: ""
        },
        {
            name: `IP`,
            value: vpsData.ip,
            inline: true,
        },
        {
            name: `Port`,
            value: vpsData.port,
            inline: true,
        },
        {
            name: "",
            value: ""
        },
        {
            name: `User`,
            value: vpsData.user,
            inline: true,
        },
        {
            name: `Password`,
            value: vpsData.pass,
            inline: true,
        }
    ]

    // for (vps of userData.vps) {
    //     if (vps.id == "N/A") continue
    //     fields.push(
    //         {
    //             name: vps.id,
    //             value: "ngu"
    //         }
    //     )
    // }

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