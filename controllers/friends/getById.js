const { Friend } = require("../../models");
const { HttpError } = require('../../helpers');

const getById = async (req, res, next) => {
    const { friendId } = req.params;
    const result = await Friend.findById(friendId);

    if (!result) {
      throw HttpError(404, 'Not found');
    }

    res.json(result);

}

module.exports = getById