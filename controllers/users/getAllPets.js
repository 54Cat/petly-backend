const { Pet } = require('../../models');

const getAllPets = async (req, res) => {
    const { _id } = req.user;

    const pets = await Pet.find({ owner: _id });
    res.status(200).json(pets);
};

module.exports = getAllPets;
