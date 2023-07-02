const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

async function website(interaction) {
    const website = new ButtonBuilder()
        .setURL('https://longcraft.xyz')
		.setLabel('Unknown VPS')
		.setStyle(ButtonStyle.Link);

    const row = new ActionRowBuilder()
        .addComponents(website);
    
    interaction.reply({
        components: [row]
    })
}

module.exports = website