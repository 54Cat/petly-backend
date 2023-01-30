const { User } = require('../../models');

const getCurrent = async (req, res) => {
    const { id: owner } = req.user;

    const result = await User.findById(owner);
    res.json(result);
};

module.exports = getCurrent;
