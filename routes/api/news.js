const express = require('express')

const router = express.Router();

const ctrl = require('../../controllers/news/getAll')

const { ctrlWrapper } = require('../../helpers')


router.get('/', ctrlWrapper(ctrl))

module.exports = router
