const { Friend } = require("../../models");

const getAll = async (req, res) => {
    const result = await Friend.find();
  res.json(result);
}

module.exports = getAll