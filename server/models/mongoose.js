/**
 * @fileOverview The creation and connection to a database in mongoDB via mongoose
 * @author <a href="https://www.linkedin.com/in/andredevay/"> André Devay </a>
 * @version 1.0
 */

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TesteLogin', { useNewUrlParser: true });

module.exports = {mongoose};