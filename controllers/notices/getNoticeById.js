const { Notice } = require('../../models');
const { RequestError } = require('../../helpers');

const getNoticeById = async (req, res) => {
    const { noticeId } = req.params;
    const notice = await Notice.findById(noticeId).populate('owner');
    if (!notice) {
        throw RequestError(404, 'Not found');
    }
    const result = {
        ...notice._doc,
        email: notice.owner.email,
        phone: notice.owner.phone,
    };

    res.json(result);
};

module.exports = getNoticeById;
