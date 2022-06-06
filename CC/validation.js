// validation
const Joi = require("@hapi/joi");

// register
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

// login
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

// ticket
const ticketValidation = (data) => {
  ticket.is_booked = false;
  ticket
    .save()
    .then((data) => console.log(`Opened ticket with ticketID: ${ticket._id}`))
    .catch((err) => console.log(`Failed to open ticket with ticketID: ${ticket._id}`));
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.ticketValidation = ticketValidation;
