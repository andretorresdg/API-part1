/**
 * @fileOverview This file is a Jest test and it should respond the GET method
 * @author <a href="https://www.linkedin.com/in/andredevay/"> André Devay </a>
 * @version 1.0
 */

const request = require('supertest');
const app = require('../server/main');

describe('Test the root path', () => {
 test('It should respond the GET method', async () => {
   const response = await request(app).get('/users');
   expect(response.statusCode).toBe(200);
 });
});
