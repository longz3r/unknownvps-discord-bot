const getUserInfo = require("../../functions/getUserInfo")
const checkUserExists  = require("../../functions/checkUserExists")


async function userinfo(interaction) {
    if (!await checkUserExists(interaction.targetId)) {
        interaction.reply({
            content: "User wasn't registered"
        })
        return
    }
    let userData = await getUserInfo(interaction.targetId)

    const infoEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Unknown VPS')
	// .setURL('https://longcraft.xyz')
	.setAuthor({ name: 'User info', iconURL: 'https://i.imgur.com/AfFp7pu.png'})
	// .setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: `Username:`, value: interaction.targetId },
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

module.exports = userinfo