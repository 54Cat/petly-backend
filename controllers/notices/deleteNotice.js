const { Notice } = require('../../models');
const { RequestError } = require('../../helpers');

const deleteNotice = async (req, res) => {    
    const { noticeId } = req.params;    
    const { _id } = req.user;       
    const removedNotice = await Notice.findOneAndRemove({
        _id: noticeId,
        owner: _id,
    });
    console.log(removedNotice);
    if (!removedNotice) {       
        throw RequestError(404, 'Not found');
        // const error = new Error;
        // throw error(404);
    }
    res.json({
        message: 'notice deleted',
        data: removedNotice,
    });
};

module.exports = deleteNotice;
