const { Notice } = require('../../models');
const { RequestError } = require('../../helpers');

const getNoticesByCategory = async (req, res) => {
    const { category } = req.params;
    const notices = await Notice.find({ category });
    if (!notices) {          
        throw RequestError(404, 'No any notices in this category');
    }
    res.json(notices);
};

module.exports = getNoticesByCategory;