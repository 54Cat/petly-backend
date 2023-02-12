const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');
const { RequestError } = require('../../helpers');
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw RequestError(401, 'Email or password is wrong');
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
        throw RequestError(401, 'Email or password is wrong');
    }
    const payload = {
        id: user._id,
    };

    const token = jwt.sign(payload, SECRET_KEY);
    await User.findByIdAndUpdate(user._id, { token });
    res.json({
        token,
        user
            // : {
            // id: user._id,
            // email,
            // name,
            // city,
            // phone,
            // birthday,
            // favorites: user.favorites,
        // },
    });
};

module.exports = login;
