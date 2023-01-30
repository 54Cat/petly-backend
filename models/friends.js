const { Schema, model } = require('mongoose');

const { handleSaveErrors } = require('../helpers')
const emailRegexp = new RegExp('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/')


const friendsSchema = new Schema(  {
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    addressUrl: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    address: {
        type: String,
    },
    workDays: {
        type: Array,
    },
    phone: {
        type: String,
  },
    email: {
        type: String,
        match: emailRegexp,
    }
}, { versionKey: false, timestamps: true })

friendsSchema.post("save", handleSaveErrors)

const Friend = model("friend", friendsSchema)

module.exports = {
  Friend,
}