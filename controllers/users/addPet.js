const { Pet } = require('../../models');

const { uploadToCloudinary } = require('../../helpers');

const addPet = async (req, res) => {
    const { _id } = req.user;
    const { body } = req;
    const locaFilePath = req.file.path;
    const data = await uploadToCloudinary(locaFilePath);
    const imageURL = data.url;

    const newPet = await Pet.create({ ...body, photoURL: imageURL, owner: _id });

    res.status(201).json(newPet);
};

module.exports = addPet;
