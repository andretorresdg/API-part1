/**
 * @fileOverview This file is a Jest test and it should respond the GET method via ID
 * @author <a href="https://www.linkedin.com/in/andredevay/"> André Devay </a>
 * @version 1.0
 */

const request = require('supertest');
const app = require('../server/app');


describe('Test the root path', () => {
    test('It should respond to the GET method via ID', async () => {
        // add a new user
        const response1 = await request(app).post('/users')
        .send({
            email: 'barney@nowhere.com',
            first_name: 'Barney',
            last_name: 'Flintstone',
            personal_phone: '534534534',
            password: 'anothersecret'
        }).set('Accept', 'application/json');
        // get new user's id
        let text = JSON.parse(response1.text);
        let path = '/users/' + text._id;
        console.log(path);
        // get method via id
        const response2 = await request(app).get(path);
        expect(response2.statusCode).toBe(200);
    });
});
