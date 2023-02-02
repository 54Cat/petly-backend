const { Notice } = require('../../models');
const { RequestError } = require('../../helpers');

const getNoticeById = async (req, res) => {
    console.log(req);
    const {id} = req.params; 
    // console.log(req);
    // console.log(noticeId);
    const notice = await Notice.findById(id);
    if (!notice) {        
        throw RequestError(404, 'Not found');
    }
    res.json(notice);
};

module.exports = getNoticeById;
