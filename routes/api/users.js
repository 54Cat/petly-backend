const express = require('express');
const { users: ctrl } = require('../../controllers');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, authenticate, upload } = require('../../middlewares');
const { user: schema } = require('../../schemas');

const router = express.Router();

router.get('/', authenticate, ctrlWrapper(ctrl.getCurrent));

router.patch(
    '/:userId',
    authenticate,
    upload.single('avatar'),
    validateBody(schema.updateUserDataSchema),
    ctrlWrapper(ctrl.updateUserData)
);

router.post(
    '/pets',
    authenticate,
    upload.single('myPetsPhoto'),
    validateBody(schema.petSchema),
    ctrlWrapper(ctrl.addPet)
);

router.delete('/pets/:petId', authenticate, ctrlWrapper(ctrl.deletePet));

module.exports = router;
