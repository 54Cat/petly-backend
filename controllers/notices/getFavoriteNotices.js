const { Notice } = require('../../models');
const { User } = require('../../models');

const getFavoriteNotices = async (req, res) => {
    const { _id } = req.user;    
    const user = await User.findById(_id);
    const idArray = user.favorites.map(favorite => { return favorite.toString() });   
    const favorites = await Notice.find({ _id: idArray });    
    if (!favorites) {       
        const error = new Error();
        throw error(404, 'You have no any favorite notices');    
    }
    res.status(200).json(favorites);
};

module.exports = getFavoriteNotices;