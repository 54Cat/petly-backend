const Joi = require('joi').extend(require('@joi/date'));

const updateUserDataSchema = Joi.object({
    email: Joi.string().email(),
    name: Joi.string(),
    birthday: Joi.date().format('DD.MM.YYYY').utc(),
    city: Joi.string().pattern(/[A-Z][a-z]+, [A-Z][a-z]*/),
    phone: Joi.string().pattern(/^\+380\d{9}$/, 'numbers'),
});

module.exports = updateUserDataSchema;
