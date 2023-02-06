const { Notice } = require('../../models');
const { uploadToCloudinary } = require('../../helpers');

const addNotice = async (req, res) => {    
    const { _id } = req.user;
    const { body } = req;
    const locaFilePath = req.file.path;
    const data = await uploadToCloudinary(locaFilePath);
    const imageURL = data.url;

    const newNotice = await Notice.create({ ...body, imageURL: imageURL, owner: _id });
    res.status(201).json(newNotice);
};

module.exports = addNotice;