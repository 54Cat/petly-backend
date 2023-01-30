const { User } = require('../../models');

const getCurrent = async (req, res) => {
    const { id } = req.user;
    const user = await User.findById(id);
    res.json(user);
};

module.exports = getCurrent;
