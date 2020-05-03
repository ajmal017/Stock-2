const supertest = require('supertest')
const app = require('../app')
const testClient = supertest(app)
const LOGIN_URL = '/identity/login'
const REGISTER_URL = '/identity/register'
const httpMocks = require("node-mocks-http");
proxy = require('express-http-proxy')

const payload = {
    email: 'test@email.com',
    password: 'testpassword',
    password2: 'testpassword'
}

describe('Identity LOGIN endpoint', () => {
    it('should throw error because the email is null', async () => {
        const res = await testClient.post(LOGIN_URL).send({ ...payload, email: null })
        expect(res.statusCode).toBe(422)
    })

    it('should throw error because the email is not valid', async () => {
        const res = await testClient.post(LOGIN_URL).send({ ...payload, email: 'testgmai.com' })
        expect(res.statusCode).toBe(422)
    })

    it('should throw error because the password is null', async () => {
        const res = await testClient.post(LOGIN_URL).send({ ...payload, password: null })
        expect(res.statusCode).toBe(422)
    })

    it('should throw error because the password length < 6 characters', async () => {
        const res = await testClient.post(LOGIN_URL).send({ ...payload, password: 'test' })
        expect(res.statusCode).toBe(422)
    })
})


describe('Identity REGISTER endpoint', () => {
    it('should throw error because the email is null', async () => {
        const res = await testClient.post(REGISTER_URL).send({ ...payload, email: null })
        expect(res.statusCode).toBe(422)
    })

    it('should throw error because the email is not valid', async () => {
        const res = await testClient.post(REGISTER_URL).send({ ...payload, email: 'testgmai.com' })
        expect(res.statusCode).toBe(422)
    })

    it('should throw error because the password is null', async () => {
        const res = await testClient.post(REGISTER_URL).send({ ...payload, password: null })
        expect(res.statusCode).toBe(422)
    })

    it('should throw error because the password length < 6 characters', async () => {
        const res = await testClient.post(REGISTER_URL).send({ ...payload, password: 'test' })
        expect(res.statusCode).toBe(422)
    })

    it('should throw error because the password2 length < 6 characters', async () => {
        const res = await testClient.post(REGISTER_URL).send({ ...payload, password2: 'test' })
        expect(res.statusCode).toBe(422)
    })

    it('should throw error because the password2 is different to password', async () => {
        const res = await testClient.post(REGISTER_URL).send({ ...payload, password2: 'test' })
        expect(res.statusCode).toBe(422)
    })
})
