const express = require('express')
const ctrl = require('../../controllers/friends')
const { ctrlWrapper } = require('../../helpers')
const { isValidId } = require('../../middlewares')

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAll))

router.get('/:id', isValidId, ctrlWrapper(ctrl.getById))

module.exports = router
