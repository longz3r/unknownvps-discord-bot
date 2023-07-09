const { EmbedBuilder } = require("discord.js")
const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
// const sendAPIRequest = require("../functions/sendAPIRequest")
const getUserInfo = require("../functions/getUserInfo")

async function info(interaction) {
	let userData = await getUserInfo(interaction.user.id)

    const infoEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Unknown VPS')
	// .setURL('https://longcraft.xyz')
	.setAuthor({ name: 'User info', iconURL: 'https://i.imgur.com/AfFp7pu.png'})
	// .setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: `Username:`, value: (interaction.user.tag).split("#")[0] },
		{ name: `Email: `, value: userData.email },
        // { name: 'Date created', value: '2/7/2023' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Available VPS', value: `**${userData.vps.length - 1}** (use /listvps for detailed info)`, inline: true },
		// { name: 'Billing Status', value: 'Good Standing', inline: true },
	)
	.setTimestamp()
	.setFooter({ text: '©️Unknown VPS 2023', iconURL: 'https://i.imgur.com/AfFp7pu.png' });


    interaction.reply({embeds: [infoEmbed], ephemeral: true})
}

module.exports = info