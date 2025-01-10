const { user } = require('../services/user.services')

const getAllUsers = () => {
    return user
}
module.exports = { getAllUsers }