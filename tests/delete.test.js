/**
 * @fileOverview This file is a Jest test and it should respond the DELETE method
 * @author <a href="https://www.linkedin.com/in/andredevay/"> André Devay </a>
 * @version 1.0
 */

const request = require('supertest');
const app = require('../server/app');

describe('Test the root path', () => {
    test('It should respond the DELETE method', async () => {
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
        // delete user
        const response2 = await request(app).delete(path);
        console.log('reponse2 returned');
        expect(response2.statusCode).toBe(200);
    });
});
