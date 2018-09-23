/**
 * @fileOverview This command creates a port
 * @author <a href="https://www.linkedin.com/in/andredevay/"> André Devay </a>
 * @version 1.0
 */

const app = require('./server/app.js');

app.listen(5000, () => {
	console.log('Started on port 5000');
});
