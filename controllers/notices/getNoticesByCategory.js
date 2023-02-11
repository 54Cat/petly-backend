const { Notice } = require('../../models');
const { RequestError } = require('../../helpers');

const getNoticesByCategory = async (req, res) => {
    const { category } = req.params;
    const { page = 1, limit = 20 } = req.query;
    const skip = (page - 1) * limit;
    const notices = await Notice.find({ category: category }, "-createdAt -updatedAt", { skip, limit: Number(limit) });

    if (!notices) {          
        throw RequestError(404, 'No any notices in this category');
    }
    res.json(notices);
};

module.exports = getNoticesByCategory;