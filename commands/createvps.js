const sendAPIRequest = require("../functions/sendAPIRequest")

async function createVPS(interaction) {
    const plan = interaction.options.getString("plan")
    
    requestBody = {
        "discordId": interaction.user.id,
        "plan": plan
    }
    res = await sendAPIRequest("/vps/assign", "POST", {}, requestBody)
    
    if (res.status == 200) {
        console.log(`${interaction.user.tag} created VPS with plan ${plan}`)
        interaction.reply(`You created VPS with ${plan} plan successfully`)
    } else {
        interaction.reply(`Something went wrong\nMessage: ${res.data}`)
        console.log(`/////////////////////////////////////////////\n
        ERROR\n
        AT CREATE VPS\n
        DISCORD ID ${interaction.user.id}\n
        PLAN ${plan}\n
        API RESPONSE: ${res.status}\n
        ${res.data}\n
        /////////////////////////////////////////////`)
    }
}

module.exports = createVPS