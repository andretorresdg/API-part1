const request = require('supertest');
const app = require('../server/main');

describe('Test the root path', () => {
 test('It should respond the GET method in logout', async () => {
   const response = await request(app).get('/logout');
   expect(response.statusCode).toBe(200);
 });
});