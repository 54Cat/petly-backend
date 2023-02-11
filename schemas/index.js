const auth = require('./auth')
const notices = require('./notices')
const user = require('./user')
const pet = require("./pet/petSchema")

module.exports = {
    auth,
    notices,
    user,
    pet
};