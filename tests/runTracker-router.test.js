const supertest = require('supertest');
const server = require('../server');
const db = require('../data/db-config');


describe('runTracker-router end point tests', function () {
    describe('Get tests', function () {
        beforeEach(async () => {
            await db('users').truncate()
            await db('runTimes').truncate()
        })
        it('GET /api/run-tracker should return status 200 and respond with JSON', async () => {
            return supertest(server)
                .get('/api/run-tracker')
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i)
                })
        })
        it('GET /api/run-tracker/runs should return status 200 and respond with JSON', async () => {
            return supertest(server)
                .get('/api/run-tracker/runs')
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i)
                })
        })
        it('GET /api/run-tracker/user/1 should return status 200 and respond with JSON', async () => {
            await supertest(server)
                .post('/api/auth/register')
                .send({ username: 'testUsername', password: 'testPassword' })
            return supertest(server)
                .get('/api/run-tracker/user/1')
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i)
                })
        })
    })
})