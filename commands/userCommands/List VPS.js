const getUserInfo = require("../../functions/getUserInfo")
const getVpsInfo = require("../../functions/getVpsInfo")
const checkUserExists  = require("../../functions/checkUserExists")

async function listvps(interaction) {
    if (!await checkUserExists(interaction.targetId)) {
        interaction.reply({
            content: "User wasn't registered"
        })
        return
    }
    let userData = await getUserInfo(interaction.targetId)
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