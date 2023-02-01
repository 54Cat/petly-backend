const { User } = require('../../models');

const getCurrent = async (req, res) => {
    const { _id } = req.user;
    const user = await User.findById(_id);
    res.json(user);
};

module.exports = getCurrent;
