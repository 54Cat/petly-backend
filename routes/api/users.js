const express = require('express');
const { users: ctrl } = require('../../controllers');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, authenticate, upload } = require('../../middlewares');
const { user: schema } = require('../../schemas');

const router = express.Router();

router.get('/', authenticate, ctrlWrapper(ctrl.getCurrent));

router.patch('/update', authenticate, upload.single('avatar'), validateBody(schema.updateUserDataSchema), ctrlWrapper(ctrl.updateUserData));

module.exports = router;
