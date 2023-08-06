const sendAPIRequest = require("./sendAPIRequest")

async function getVpsInfo(vpsId) {
    // return .data because sendAPIRequest return the whole response
    return (await sendAPIRequest(`/vps/info/${vpsId}`, "GET")).data
}

module.exports = getVpsInfo