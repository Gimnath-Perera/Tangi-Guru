const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('all'), validate(userValidation.createUser), userController.createUser)
  .get(auth('all'), validate(userValidation.getUsers), userController.getUsers);
router
  .route('/:userId')
  .get(auth('all'), validate(userValidation.getUser), userController.getUser)
  .patch(auth('all'), validate(userValidation.updateUser), userController.updateUser)
  .delete(auth('all'), validate(userValidation.deleteUser), userController.deleteUser);
router.route('/send-email').post(auth('all'), validate(userValidation.sendEmail), userController.sendEmail);

module.exports = router;
