async function getCurrentTime() {
    let date_ob = new Date();

    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);

    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    let time = `${date}/${month}/${date_ob.getFullYear()}-${date_ob.getHours()}:${date_ob.getMinutes()}:${date_ob.getSeconds()}`
    return time
}

module.exports = getCurrentTime