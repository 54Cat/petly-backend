const { Notice } = require('../../models/notice')

const addNotice = async (req, res) => {
    const newNotice = await Notice.create(...req.body);

    res.status(201).json(newNotice)
}

module.exports = addNotice;