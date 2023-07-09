const {ButtonBuilder, ButtonStyle, ActionRowBuilder, EmbedBuilder} = require("discord.js")
const validateEmail = require("../utilities/validateEmail")
const checkUserExists = require("../functions/checkUserExists")
const sendAPIRequest = require("../functions/sendAPIRequest")

async function register(interaction) {
    if (await checkUserExists(interaction.user.id)) {
        interaction.reply("You already registered")
        return
    }

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

		// Show the modal to the user

    const collectorFilter = i => i.user.id === interaction.user.id;
    try {
        const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60000 });

        if (confirmation.customId === 'yes') {
            //send request here
            createUserRequestBody = {
                "discordId": interaction.user.id,
                "email": email
            }
            let createUserReponse = await sendAPIRequest("/users/create", "POST", {}, createUserRequestBody)
            
            if (createUserReponse.status == 200) {
                await confirmation.update({ content: `**Account created successfully\nFor additional security please use /verifyemail**`, components: [], embeds: [] });
            } else {
                await confirmation.update({ content: `**Something went wrong\n This is not your fault, we will investigate it**`, components: [], embeds: [] })
            }

            
        } else if (confirmation.customId === 'no') {
            await confirmation.update({ content: 'Action cancelled', components: [], embeds: [] });
        }
    } catch (e) {
        console.log(e)
        await interaction.editReply({ content: 'Confirmation not received within 1 minute, cancelling', components: [], embeds: [] });
    }
}

module.exports = register