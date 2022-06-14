const app = require('../../app');
const request = require('supertest');

describe('home page', () => {
    it('Contains the text Environments', async () => {
        const res = await request(app).get('/');
        expect(res.text).toContain('Environments');
    })
})
