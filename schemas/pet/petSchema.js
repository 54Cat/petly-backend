const Joi = require('joi');

const petShema = Joi.object({
    name: Joi.string().alphanum().min(2).max(16).required(),
    birthday: Joi.date().required(),
    breed: Joi.string().alphanum().min(2).max(16).required(),
    comments: Joi.string().min(8).max(120).required(),
    photoURL: Joi.string()
});

module.exports = petShema;
