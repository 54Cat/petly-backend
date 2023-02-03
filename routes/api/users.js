const express = require('express');
const { users: ctrl } = require('../../controllers');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, authenticate } = require('../../middlewares');
const { user: schema } = require('../../schemas');

const router = express.Router();

router.get('/', authenticate, ctrlWrapper(ctrl.getCurrent));

router.patch(
    '/:userId',
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

module.exports = router;
