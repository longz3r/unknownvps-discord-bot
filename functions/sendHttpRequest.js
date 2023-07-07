const axios = require("axios")
require('dotenv').config()

async function sendHttpRequest(endpoint, method, headers={}, body={}) {

    headers = {
        'Content-Type': 'application/json'
    }

    if (method == "POST") {
        res = await axios.post(process.env.API_ENDPOINT + endpoint, body, {
            headers: headers
        }).catch(err => {
            console.error(err)
        })
    } else if (method == "GET") {
        res = await axios.get(process.env.API_ENDPOINT + endpoint, {
            headers: headers
        }).catch(err => {
            console.error(err)
        })
    }
    return res
}

module.exports = sendHttpRequest