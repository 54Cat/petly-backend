const { Notice } = require('../../models');

const addNotice = async (req, res) => {    
    const { _id } = req.user;
    const { body } = req;
    const newNotice = await Notice.create({ ...body, owner: _id });
    res.status(201).json(newNotice);
};

module.exports = addNotice;