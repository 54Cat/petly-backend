const express = require('express')

const router = express.Router();

const ctrl = require('../../controllers/friends')

const { ctrlWrapper } = require('../../helpers')

const { isValidId } = require('../../middlewares')


router.get('/', ctrlWrapper(ctrl.getAll))

router.get('/:friendId', isValidId, ctrlWrapper(ctrl.getById))

module.exports = router
