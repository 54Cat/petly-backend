const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { handleMongooseError } = require('../helpers')

// схемa mongoose
const noticeSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Set title'],
    },
    name: {
        type: String,
        required: [true, 'Set name for pet'],
    },
    birthdate: {
        type: Date,
        default: Date.now,
    },
    breed: {
        type: String,
    },
    location: {
        type: String,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,  
    }
}, { versionKey: false, timestamps: true });
// схема бросает ошибку с нужным статусом
noticeSchema.post("save", handleMongooseError);

// Joi схема на добавление данных в поля 
const addSchema = Joi.object({
    title: Joi.string().trim().min(2).max(48).required(),
    name: Joi.string().trim().min(2).max(16).required(),
    birthdate: Joi.date().format("DD/MM/YYYY").required(),
    breed: Joi.string().min(2).max(24).required(),
    // location: Joi.string().trim().regex(/^[a-z\d\s\-\.\,]*$/i).max(100).required(),

    
});
// Joi схема на обновление поля favorite
const schemaUpdateFavorite = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = { addSchema, schemaUpdateFavorite };

// создаём модель на основе mongoose схемы
const Notice = model('notice', noticeSchema)


module.exports = { Notice, schemas };