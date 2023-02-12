const { Schema, SchemaTypes, model } = require('mongoose');
const { handleSaveErrors } = require('../helpers');

const petSchema = new Schema({
    namePet: {
        type: String,
        required: [true, 'What is the name of this pet?'],
    },
    birthdayPet: {
        type: Date,
        required: [true, 'Input the birthday'],
    },
    breed: {
        type: String,
        required: [true, 'Set breed of pet'],
    },
    photoURL: {
        type: String,
        required: [true, 'Set photo of pet'],
    },
    comments: {
        type: String,
    },
    owner: {
        type: SchemaTypes.ObjectId,
        ref: 'user',
        required: true,
    },
});

const Pet = model('pet', petSchema);

petSchema.post('save', handleSaveErrors);

module.exports = Pet;
