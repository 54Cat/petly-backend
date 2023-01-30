const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers/notices');
const { schemas } = require('../../models/notice');

const { ctrlWrapper } = require('../../helpers');
const { validateBody } = require('../../middlewares');

router.post('/', validateBody(schemas.addNoticeSchema), ctrlWrapper(ctrl.addNotice))


module.exports = router;