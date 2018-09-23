/**
 * @fileOverview This file is a Jest test and it should not respond correctly to the DELETE method
 * @author <a href="https://www.linkedin.com/in/andredevay/"> André Devay </a>
 * @version 1.0
 */

const request = require('supertest');
const app = require('../server/app');

describe('Test the root path', () => {
	test('It should not respond correctly the DELETE method', async () => {
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
		const path = `/users/${text._id}`;
		console.log(path);
		// delete user
		const response2 = await request(app).delete(path);
		console.log('reponse2 returned once');
		expect(response2.statusCode).toBe(200);
		// delete again the same user (it does not exist anymore)
		const response3 = await request(app).delete(path);
		console.log('reponse2 returned twice');
		expect(response3.statusCode).toBe(404);
	});
});
