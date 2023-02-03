const { Notice } = require('../../models');
const { RequestError } = require('../../helpers');

const getUsersNotices = async (req, res) => {
    const { _id } = req.user;
    const notices = await Notice.find({ owner: _id });
    if (!notices) {        
        throw RequestError(404, 'You have no any added notices');
    }
    res.status(200).json(notices);
};

module.exports = getUsersNotices;
