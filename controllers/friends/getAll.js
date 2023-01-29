const { Friend } = require("../../models");

const getAll = async (req, res) => {
  const { page = 1, limit = 6 } = req.query;
  const skip = (page - 1) * limit;
    const result = await Friend.find({}, null, { skip, limit: Number(limit) });
  res.json(result);
}

module.exports = getAll