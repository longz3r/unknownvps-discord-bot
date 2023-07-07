const { EmbedBuilder } = require("discord.js")
const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

async function listvps(interaction) {
    const listVPSembed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Unknown VPS')
	.setURL('https://longcraft.xyz')
	.setAuthor({ name: 'User info', iconURL: 'https://i.imgur.com/AfFp7pu.png'})
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Long Zer', value: 'gialong@longcraft.xyz' },
        { name: 'Date created', value: '2/7/2023' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Available VPS', value: '69 (use /listvps for detailed info)', inline: true },
		{ name: 'Billing Status', value: 'Good Standing', inline: true },
        { name: 'Date created', value: '2/7/2023' },
        { name: 'Date created', value: '2/7/2023' },
        { name: 'Date created', value: '2/7/2023' },
        { name: 'Date created', value: '2/7/2023' },
        { name: 'Date created', value: '2/7/2023' },
        { name: 'Date created', value: '2/7/2023' },
        { name: 'Date created', value: '2/7/2023' },
        { name: 'Date created', value: '2/7/2023' },
        { name: 'Date created', value: '2/7/2023' },
        { name: 'Date created', value: '2/7/2023' },
        { name: 'Date created', value: '2/7/2023' },
        { name: 'Date created', value: '2/7/2023' },
	)
	.setTimestamp()
	.setFooter({ text: '©️Unknown VPS 2023', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

    interaction.reply({embeds: [listVPSembed]})
}

module.exports = listvps