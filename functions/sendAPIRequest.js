const axios = require("axios")
require('dotenv').config()

async function sendHttpRequest(endpoint, method, headers={}, body={}) {

    headers = {
        'Content-Type': 'application/json',
        'x-access-token': process.env.ACCESS_TOKEN
    }

    if (method == "POST") {
        try {
            const response = await axios.post(process.env.API_ENDPOINT + endpoint, body, {
                headers: headers
            });
            // Handle successful response
            return response;
        } catch (error) {
            
            return error.response;
        }
    } else if (method == "GET") {
        try {
            const response = await axios.get(process.env.API_ENDPOINT + endpoint, body, {
                headers: headers
            });
            // Handle successful response
            return response;
        } catch (error) {
            
            return error.response;
        }
    }

}

module.exports = sendHttpRequest