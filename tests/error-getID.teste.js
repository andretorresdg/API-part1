/**
 * @fileOverview This file is a Jest test and it should not respond correctly to the GET method via ID
 * @author <a href="https://www.linkedin.com/in/andredevay/"> André Devay </a>
 * @version 1.0
 */

const request = require('supertest');
const app = require('../server/app');


describe('Test the root path', () => {
	test('It should respond not respond correctly to the GET method via ID', async () => {
		// add a new user
		const response1 = await request(app).post('/users')
			.send({
				email: 'barney@nowhere.com',
				first_name: 'Barney',
				last_name: 'Flintstone',
				personal_phone: '534534534',
				password: 'anothersecret',
			}).set('Accept', 'application/json');
		// get new user's id
		const text = JSON.parse(response1.text);
		const path = `/users/${text._id}123`;
		console.log(path);
		// get method via id
		const response2 = await request(app).get(path);
		expect(response2.statusCode).toBe(404);
	});
});
