const express = require('express');
const ctrl = require('../../controllers/auth');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, authenticate } = require('../../middlewares');
const {
    registerSchema,
    loginSchema,
    updateUserSchema,
} = require('../../schemas');

const router = express.Router();

router.post(
    '/register',
    validateBody(registerSchema),
    ctrlWrapper(ctrl.register)
);

router.post('/login', validateBody(loginSchema), ctrlWrapper(ctrl.login));

router.patch(
    '/:contactId',
    authenticate,
    validateBody(updateUserSchema),
    ctrlWrapper(ctrl.updateContact)
);

router.post('/logout', authenticate, ctrlWrapper(ctrl.logout));

module.exports = router;
