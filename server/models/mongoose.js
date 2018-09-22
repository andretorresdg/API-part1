/**
 * @fileOverview The creation of a database in mongoDB via mongoose
 * @author <a href="mailto:andretorresdg@usp.br">André Devay</a>
 * @version 1.0
 */

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/LoginDB', { useNewUrlParser: true });

module.exports = {mongoose};