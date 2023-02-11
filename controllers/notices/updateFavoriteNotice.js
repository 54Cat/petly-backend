const { User } = require('../../models');

const updateFavoriteNotice = async (req, res) => {
    const { noticeId } = req.params;
    const { _id } = req.user;
    const user = await User.findById(_id);
    const favorites = user.favorites;
    if (favorites.includes(noticeId)) {
        const index = favorites.indexOf(noticeId);
        favorites.splice(index, 1);
        user.save();
        res.status(200).json({
            message: "Notice removed from your favorites", favorites })
            return;
    }
    favorites.push(noticeId);
    user.save();
    res.status(200).json({message: "Notice added to your favorites", favorites});
};

module.exports = updateFavoriteNotice;