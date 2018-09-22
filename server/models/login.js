/**
 * @fileOverview The detailing of the variable "Login"
 * @author <a href="mailto:andretorresdg@usp.br">André Devay</a>
 * @version 1.0
 */

var mongoose = require('mongoose');
const Joi = require('joi');

/**@type {object}
 * This is the mongoose model for the login.
 */

var Login = mongoose.model('Login', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    personal_phone: {
        type: String
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = {Login};