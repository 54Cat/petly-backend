const Joi = require('joi');

const addPetSchema = Joi.object({
    namePet: Joi.string().alphanum().min(2).max(16).required(),
    birthdayPet: Joi.date().required(),
    breed: Joi.string().alphanum().min(2).max(16).required(),
    comments: Joi.string().min(8).max(120).required(),
    photoURL: Joi.string()
});

module.exports = addPetSchema;
