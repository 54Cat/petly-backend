const { Notice } = require('../../models');
const { RequestError } = require('../../helpers');

const getNoticeById = async (req, res) => {
    const {noticeId} = req.params; 
    const notice = await Notice.findById(noticeId);
    if (!notice) {        
        throw RequestError(404, 'Not found');
    }
    res.json(notice);
};

module.exports = getNoticeById;
