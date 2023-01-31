const express = require('express');
const { users: ctrl } = require('../../controllers');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, authenticate } = require('../../middlewares');
const { updateUserDataSchema, petSchema } = require('../../schemas');

const router = express.Router();

router.get('/current', authenticate, ctrlWrapper(ctrl.getCurrent));


router.patch(
    '/:contactId',
    authenticate,
    validateBody(updateUserDataSchema),
    ctrlWrapper(ctrl.updateUserData)
);

router.post(
    '/pets',
    authenticate,
    validateBody(petSchema),
    ctrlWrapper(ctrl.addPet)
);

router.delete('/pets/:petId', authenticate, ctrlWrapper(ctrl.deletePet));

router.get('/pets', authenticate, ctrlWrapper(ctrl.getAllPets));

module.exports = router;
