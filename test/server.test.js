const request = require('supertest');
const app = require('../server/index');

describe('Test the root path', () => {
    test('GET /user/22', (done) => {
        request(app).get('/user/22').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});