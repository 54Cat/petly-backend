// auth
const loginSchema = require('./auth/loginSchema');
const registerSchema = require('./auth/registerSchema');
const updateUserSchema = require('./auth/updateUserSchema');

// users
const petSchema = require('./user/petSchema');

// notices


module.exports = {
    loginSchema,
    registerSchema,
    updateUserSchema,

    petSchema
};
