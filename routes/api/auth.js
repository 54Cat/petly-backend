const express = require('express');
const ctrl = require('../../controllers/auth');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, authenticate } = require('../../middlewares');
const { loginSchema,
    registerSchema } = require('../../schemas/auth');

const router = express.Router();

router.post(
    '/register',
    validateBody(registerSchema),
    ctrlWrapper(ctrl.register)
);

router.post('/login', validateBody(loginSchema), ctrlWrapper(ctrl.login));

router.post('/logout', authenticate, ctrlWrapper(ctrl.logout));

module.exports = router;
