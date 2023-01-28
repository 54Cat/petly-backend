const RequestError = require('../helpers/RequestError');

const validateBody = schema => {
    const validateFunction = (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            next(RequestError(400, error.message));
        }
        next();
    };
    return validateFunction;
};

module.exports = validateBody;
