const { User } = require('../../models');
const { Pet } = require('../../models');

const getCurrent = async (req, res) => {
    const { _id } = req.user;
    const user = await User.findById(_id);
    const pets = await Pet.find({ owner: _id });
    res.json({user, pets});
};

module.exports = getCurrent;
