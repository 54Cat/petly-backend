const { Pet } = require('../../models');
const { RequestError } = require('../../helpers');

const deletePet = async (req, res) => {
    const { petId } = req.params;
    const { _id } = req.user;
    const removedPet = await Pet.findByIdAndRemove({ _id: petId, owner: _id });
    if (!removedPet) {
        throw RequestError(404);
    }
    res.json({
        message: 'pet deleted',
        data: removedPet,
    });
};

module.exports = deletePet;
