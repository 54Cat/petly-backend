const { Notice } = require('../../models');
const { RequestError } = require('../../helpers');

const getTitleNotice = async (req, res) => {

    Notice.createIndex({ title: "text" });
    const query = { $text: { $search: "" } };
    const sort = {score: {$meta: ""}}
    const projection = {
        _id: 0,
        title: 1,
        score: {$meta: ""},
    };
    const notices = await Notice.find(query).sort(sort).project(projection);

        if (!notices) {          
        throw RequestError(404, 'No any notices');
    }
    res.json(notices);

}

module.exports = getTitleNotice;
