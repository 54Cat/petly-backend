const { Schema, model } = require('mongoose');
const { handleSaveErrors } = require('../helpers');

const userSchema = new Schema(
    {
        password: {
            type: String,
            required: [true, 'Password is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
            unique: true,
        },
        birthday: {
            type: String,
            default: '00.00.0000',
        },
        avatarURL: {
            type: String,
            default:
                'https://gravatar.com/avatar/559ea472958296086e61ff3eb30ecdd8?s=400&d=wavatar&r=x',
        },
        favorites: [{ type: Schema.ObjectId, ref: 'notice' }],
        myPets: [{ type: Schema.ObjectId, ref: 'userPet' }],
        token: {
            type: String,
            default: null,
        },
    },
    { versionKey: false, timestamps: true }
);

userSchema.post('save', handleSaveErrors);

const User = model('user', userSchema);

module.exports = User;
