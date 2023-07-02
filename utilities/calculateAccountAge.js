function calculateAccountAge(accountCreationTime) {
    let accountAge = Date.now() - accountCreationTime
    accountAge = accountAge/1000/60/60/24
    return accountAge
}

module.exports = calculateAccountAge