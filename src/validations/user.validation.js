const Joi = require('joi');
const { password, objectId, mobile } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    fullName: Joi.string().required(),
    phoneNumber: Joi.string().required().custom(mobile),
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
  }),
};

const sendEmail = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    subject: Joi.string().required(),
    text: Joi.string().required(),
    attachment: Joi.string().required(),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    status: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
    firstName: Joi.string(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      firstName: Joi.string(),
      lastName: Joi.string(),
      userType: Joi.string(),
      status: Joi.string().valid('Active', 'Pending', 'Reviewing', 'Deactivated'),
      phoneNumber: Joi.string(),
      address: Joi.string(),
      farm: Joi.object().keys({
        nearestMarket: Joi.string().required(),
        name: Joi.string().required(),
        postalCode: Joi.string().required(),
        openTime: Joi.string()
          .regex(/^([0-9]{2})\:([0-9]{2})$/)
          .required(),
        closeTime: Joi.string()
          .regex(/^([0-9]{2})\:([0-9]{2})$/)
          .required(),
      }),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  sendEmail,
};
