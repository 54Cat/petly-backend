const { User } = require('../../models');
const { RequestError, uploadToCloudinary } = require('../../helpers');

const updateUserData = async (req, res) => {
    const { _id } = req.user;
    const updatedUser = req.body;
    const locaFilePath = req.file.path;
    const data = await uploadToCloudinary(locaFilePath);
    const imageURL = data.url;
    const result = await User.findByIdAndUpdate(_id, {
        ...updatedUser,
        avatarURL: imageURL,
        },
        { new: true });

    if (!result) {
        throw RequestError(404, 'Not found');
    }

    return res.json(result);
};

module.exports = updateUserData;