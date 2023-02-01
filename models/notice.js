const { Schema, model } = require('mongoose');

const { handleSaveErrors } = require('../helpers');

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
        match: /^[a-z\d\s\-\\.\\,]*$/i,
    },
    comments: {
        type: String,
    },
    price: {
        type: Number,
    },
    sex: {
        type: String, 
        enum: ['Male', 'Femail'],   
    },
    category: {
        type: String,
        enum: ['sell', 'lost', 'in good hands'],
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

// создаём модель на основе mongoose схемы для коллекции petly
const Notice = model('petly', noticeSchema)

module.exports = { Notice };