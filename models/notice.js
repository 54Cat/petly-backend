const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { handleSaveErrors } = require('../helpers')

const locationRegexp = /^[a-z\d\s\-\\.\\,]*$/i;
const categories = ['sell', 'lost', 'in good hands'];
const sexChose = ['Male', 'Femail'];

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
        match: locationRegexp,
    },
    comments: {
        type: String,
    },
    price: {
        type: Number,
    },
    sex: {
        type: String, 
        enum: sexChose,   
    },
    category: {
        type: String,
        enum: categories,
        required: true,
    },
    imageURL: {
        type: String,
        required:true,        
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
noticeSchema.post("save", handleSaveErrors);

// Joi схема на добавление данных в поля 
const addNoticeSchema = Joi.object({
    title: Joi.string().trim().min(2).max(48).required(),
    name: Joi.string().trim().min(2).max(16).required(),
    birthdate: Joi.date().format("DD/MM/YYYY").required(),
    breed: Joi.string().min(2).max(24).required(),
    location: Joi.string().trim().pattern(locationRegexp).required(),
    comments: Joi.string().trim().min(8).max(120).required(),
    // price: Joi.number().positive(),
    price: Joi.number().greater(Joi.ref('0')).required(),
    sex: Joi.string().required(),
    category: Joi.string().valid(...categories).required(),
    sexChose: Joi.string().valid(...sexChose).required(),
    imageURL: Joi.string().required(),
    
});
// Joi схема на обновление поля favorite
const schemaUpdateFavorite = Joi.object({
  favorite: Joi.boolean().required(),
});


const schemas = { addNoticeSchema, schemaUpdateFavorite };

// создаём модель на основе mongoose схемы для коллекции petly
const Notice = model('petly', noticeSchema)


module.exports = { Notice, schemas };