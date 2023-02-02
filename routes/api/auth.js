const express = require('express');
const ctrl = require('../../controllers/auth');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, authenticate } = require('../../middlewares');
const { auth: schema } = require('../../schemas');

const router = express.Router();

router.post(
    '/register',
    validateBody(schema.registerSchema),
    ctrlWrapper(ctrl.register)
);

router.post('/login', validateBody(schema.loginSchema), ctrlWrapper(ctrl.login));

router.post('/logout', authenticate, ctrlWrapper(ctrl.logout));

module.exports = router;
