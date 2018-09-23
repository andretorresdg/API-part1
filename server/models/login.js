/**
 * @fileOverview The detailing of the variable "Login"
 * @author <a href="https://www.linkedin.com/in/andredevay/"> André Devay </a>
 * @version 1.0
 */

const mongoose = require('mongoose');
const Joi = require('joi');

/** @namespace {Login} Object This is the mongoose model for the login.
 */

const Login = mongoose.model('Login', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  personal_phone: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = { Login };
