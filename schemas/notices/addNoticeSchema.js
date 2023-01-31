const Joi = require('joi');

const locationRegexp = /^[a-z\d\s\-\\.\\,]*$/i;
const categories = ['sell', 'lost', 'in good hands'];
const sexChose = ['Male', 'Femail'];

// Joi схема на добавление данных в поля 
const addNoticeSchema = Joi.object({
    title: Joi.string().trim().min(2).max(48).required(),
    name: Joi.string().trim().min(2).max(16).required(),
    birthdate: Joi.date().required(),
    breed: Joi.string().min(2).max(24).required(),
    location: Joi.string().trim().pattern(locationRegexp).required(),
    comments: Joi.string().trim().min(8).max(120).required(),
    // price: Joi.number().positive(),
    price: Joi.number().greater(Joi.ref('0')).required(),
    category: Joi.string().valid(...categories).required(),
    sex: Joi.string().valid(...sexChose).required(),
    imageURL: Joi.string().required(),
    
});

module.exports = addNoticeSchema;