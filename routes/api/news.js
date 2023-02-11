const express = require('express')
const ctrl = require('../../controllers/news/getAll')
const { ctrlWrapper } = require('../../helpers')

const router = express.Router();

router.get('/', ctrlWrapper(ctrl))

module.exports = router
