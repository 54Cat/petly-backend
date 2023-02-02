const { Pet } = require('../../models');

const addPet = async (req, res) => {
    const { _id } = req.user;
    const { body } = req;
    const newPet = await Pet.create({ ...body, owner: _id });

    res.status(201).json(newPet);
};

module.exports = addPet;
