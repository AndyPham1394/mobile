const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
    afterAll(done => {
        // Closing the DB connection allows Jest to exit successfully.
        console.log('done');
        done()
    })
    it('/ (GET)', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeDefined();
    });
});


