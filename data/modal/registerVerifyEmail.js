// This is the modal for verifying email at registering
const {ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require("discord.js")

const verifyEmailModal = new ModalBuilder()
    .setCustomId('registerVerifyEmail')
    .setTitle(`Email address verification`);

const coinName = new TextInputBuilder()
    .setCustomId('token')
    // The label is the prompt the user sees for this input
    .setLabel(`Your verification code`)
    // Short means only a single line of text
    .setStyle(TextInputStyle.Short)
    .setMaxLength(6)
	// set the minimum number of characters required for submission
	.setMinLength(6)
	// set a placeholder string to prompt the user
	.setPlaceholder('Verification code has been sent to your email address')
	// set a default value to pre-fill the input
	 // require a value in this input field
	.setRequired(true);

		// Add inputs to the modal
verifyEmailModal.addComponents(new ActionRowBuilder().addComponents(coinName));

module.exports = verifyEmailModal