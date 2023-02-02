const { User } = require('../../models/user');
const { RequestError } = require('../../helpers');

const updateUserData = async (req, res) => {
    const { userId } = req.params;
    const updatedUser = req.body;
    const result = await User.findByIdAndUpdate(userId, updatedUser, {
        new: true,
    });
    if (!result) {
        throw RequestError(404, 'Not found');
    }

    return res.json(result);
};

module.exports = updateUserData;