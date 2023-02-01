// auth
const registerSchema = require('./auth/registerSchema');
const loginSchema = require('./auth/loginSchema');

// users
const updateUserDataSchema = require('./user/updateUserDataSchema');
const petSchema = require('./user/petSchema');

// notices
const addNoticeSchema = require('./notices/addNoticeSchema');


module.exports = {
    registerSchema,
    loginSchema,

    updateUserDataSchema,
    petSchema,

    addNoticeSchema
};
