const request = require('supertest');
const app = require('./src/app'); // Adjust the path as necessary
const User = require('./models/User')

// Example test
describe('GET /users', () => {
    test('should return a list of users', async () => {
        const response = await request(app).get('/users');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    })

    test('should return a user', async () => {
        const response = await request(app).get('/users/2')
        expect(response.status).toBe(200)
        expect(response.body.name).toEqual('User 2')
    })

    test('should create a new user', async () => {
        const newUser = {
            name: 'John Doe',
            age: 28
        }

        const response = await request(app)
            .post('/users')
            .send(newUser)

        expect(response.status).toBe(201)
        expect(response.body.name).toBe(newUser.name)
        expect(response.body.age).toBe(newUser.age)
    })

    test('should update a user', async () => {
        const newUser = {
            name: 'User 1',
            age: 25
        }

        const response = await request(app)
            .put('/users/1')
            .send(newUser)
        expect(response.status).toBe(202)
        expect(response.body.name).toBe(newUser.name)
        expect(response.body.age).toBe(newUser.age)
    })

    test('should delete a user', async () => {
        const response = await request(app).delete('/users/1')
        expect(response.status).toBe(203)
    })
});