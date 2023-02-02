const express = require('express');
const { users: ctrl } = require('../../controllers');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, authenticate } = require('../../middlewares');
const { user: schema } = require('../../schemas');

const router = express.Router();

router.get('/current', authenticate, ctrlWrapper(ctrl.getCurrent));


router.patch(
    '/:contactId',
    authenticate,
    validateBody(schema.updateUserDataSchema),
    ctrlWrapper(ctrl.updateUserData)
);

router.post(
    '/pets',
    authenticate,
    validateBody(schema.petSchema),
    ctrlWrapper(ctrl.addPet)
);

router.delete('/pets/:petId', authenticate, ctrlWrapper(ctrl.deletePet));

router.get('/pets', authenticate, ctrlWrapper(ctrl.getAllPets));

module.exports = router;
