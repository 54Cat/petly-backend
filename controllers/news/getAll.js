const { News } = require("../../models");

const getAll = async (req, res) => {
  // const { page = 1, limit = 6 } = req.query;
  // const skip = (page - 1) * limit;
    // const result = await News.find({}, null, { skip, limit: Number(limit) });
    const result = await News.find({});
  res.json(result);
}

module.exports = getAll