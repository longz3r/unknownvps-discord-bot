const {ButtonBuilder, ButtonStyle, ActionRowBuilder, EmbedBuilder} = require("discord.js")
const validateEmail = require("../utilities/validateEmail")

async function register(interaction) {
    const email = interaction.options.getString("email")
    if (!validateEmail(email)) {
        interaction.reply("You entered an invalid email address. Please try again")
        return
    };
    const registerEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Unknown VPS')
	.setURL('https://longcraft.xyz')
	.setAuthor({ name: 'Confirm your email address', iconURL: 'https://i.imgur.com/AfFp7pu.png'})
	.setDescription(`Is **${email}** your email?`)
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: '©️Unknown VPS 2023', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
    const yesButton = new ButtonBuilder()
        .setCustomId("yes")
		.setLabel('Yes')
		.setStyle(ButtonStyle.Success)
        .setEmoji("✅")
    const noButton = new ButtonBuilder()
        .setCustomId("no")
		.setLabel('No')
		.setStyle(ButtonStyle.Danger)
        .setEmoji("❌")

    const row = new ActionRowBuilder()
        .addComponents(yesButton)
        .addComponents(noButton)
    
    const response = await interaction.reply({
        components: [row],
        embeds: [registerEmbed]
    })
    const collectorFilter = i => i.user.id === interaction.user.id;
    try {
        const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60000 });

        if (confirmation.customId === 'yes') {
            //send request here
            await confirmation.update({ content: `email address confirmed`, components: [], embeds: [] });
        } else if (confirmation.customId === 'no') {
            await confirmation.update({ content: 'Action cancelled', components: [], embeds: [] });
        }
    } catch (e) {
        await interaction.editReply({ content: 'Confirmation not received within 1 minute, cancelling', components: [], embeds: [] });
    }
}

module.exports = register