const sendAPIRequest = require("../functions/sendAPIRequest")

async function createVPS(interaction) {
    const plan = interaction.options.getString("plan")
    
    requestBody = {
        "discordId": interaction.user.id,
        "plan": plan
    }
    interaction.reply("ngu")
    // res = await sendAPIRequest("/", "POST", {}, requestBody)
    
    // if (res.status == 200) {
    //     console.log(`${interaction.user.tag} created VPS with plan ${plan}`)
    //     interaction.reply(`You created VPS with ${plan} plan successfully`)
    // } else {
    //     interaction.reply(`Something went wrong\nMessage: ${res.data}\n This is not your fault, we will investigate it`)
    //     console.log(`/////////////////////////////////////////////\n
    //     ERROR\n
    //     AT CREATE VPS\n
    //     DISCORD ID ${interaction.user.id}\n
    //     PLAN ${plan}\n
    //     API RESPONSE: ${res.status}\n
    //     ${res.data}\n
    //     /////////////////////////////////////////////`)
    // }
}

module.exports = createVPS