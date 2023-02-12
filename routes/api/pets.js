const express = require('express');

const ctrl = require('../../controllers/pet');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, authenticate, upload } = require('../../middlewares');
const schema = require('../../schemas');

const router = express.Router();

router.post('/',
    authenticate,
    upload.single('myPetsPhoto'),
    validateBody(schema.pet),
    ctrlWrapper(ctrl.addPet)
);

router.delete('/:petId', authenticate, ctrlWrapper(ctrl.deletePet));

module.exports = router;
