const express = require('express');
const router = express.Router();

const {notices: ctrl} = require('../../controllers');
const { notices: schema } = require('../../schemas');

const { ctrlWrapper } = require('../../helpers');
const { validateBody, authenticate } = require('../../middlewares');

router.get('/:category', ctrlWrapper(ctrl.getNoticesByCategory));

router.get('/getOne/:id', ctrlWrapper(ctrl.getNoticeById));

router.get('/', authenticate, ctrlWrapper(ctrl.getUsersNotices));

router.post('/', authenticate, validateBody(schema.addNoticeSchema), ctrlWrapper(ctrl.addNotice))

router.delete('/:noticeId', authenticate, ctrlWrapper(ctrl.deleteNotice));

router.get('/favorite', authenticate, ctrlWrapper(ctrl.getFavoriteNotices));

router.get('/favorite/:noticeId', authenticate, ctrlWrapper(ctrl.addFavoriteNotice));

router.get('/', ctrlWrapper(ctrl.findNotice));

module.exports = router;