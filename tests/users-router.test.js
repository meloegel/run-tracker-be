const supertest = require('supertest');
const server = require('../server');
const db = require('../data/db-config');
const { default: expectCt } = require('helmet/dist/middlewares/expect-ct');

describe('User-router end point tests', function () {
    describe('Get tests', function () {
        beforeEach(async () => {
            await db('users').truncate()
            await db('runTimes').truncate()
        })
        it('Get api/auth/users/ should return status 200 and response should be JSON', async () => {
            let token = ''
            await supertest(server)
                .post('/api/auth/register')
                .send({ username: 'testUsername', password: 'testPassword' })
                .then(async res => token = res.body.token)
            return supertest(server)
                .get('/api/auth/users')
                .set({ authorization: token })
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i)
                })
        })
        it('GET api/auth/users/1 should return status 200 and response should be JSON', async () => {
            let token = ''
            await supertest(server)
                .post('/api/auth/register')
                .send({ username: 'testUsername', password: 'testPassword' })
                .then(async res => token = res.body.token)
            return supertest(server)
                .get('/api/auth/users/1')
                .set({ authorization: token })
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i)
                })
        })
    })
    describe('PUT and DELETE tests', function () {
        it('PUT api/auth/user/1 should return status 200 and response should be JSON', async () => {
            let token = ''
            await supertest(server)
                .post('/api/auth/register')
                .send({ username: 'testUsername', password: 'testPassword' })
                .then(async res => token = res.body.token)
            return supertest(server)
                .put('/api/auth/users/1')
                .send({ username: 'testUsername', password: 'testPassword' })
                .set({ authorization: token })
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i)
                })
        })
        it('DELETE users/1 should return status 200, response should be JSON and reponse with deleted user id', async () => {
            let token = ''
            await supertest(server)
                .post('/api/auth/register')
                .send({ username: 'testUsername', password: 'testPassword' })
                .then(async res => token = res.body.token)
            return supertest(server)
                .delete('/api/auth/users/1')
                .set({ authorization: token })
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i)
                    expect(res.body).toMatchObject({ Message: 'User with id: 1 has been deleted' })
                })
        })
    })
})