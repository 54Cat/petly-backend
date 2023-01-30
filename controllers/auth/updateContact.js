const { User } = require('../../models/user');
const { HttpError } = require('../../helpers');

const updateContact = async (req, res) => {
    const { contactId } = req.params;
    const updatedContact = req.body;
    const result = await User.findByIdAndUpdate(contactId, updatedContact, {
        new: true,
    });
    if (!result) {
        throw HttpError(404, 'Not found');
    }

    return res.json(result);
};

module.exports = updateContact;
