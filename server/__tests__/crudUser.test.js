const request = require('supertest');
const yup = require('yup');
const app = require('../app');
const db = require('../models');

const appRequest = request(app);

const userResponseSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  //password: yup.string().required(),
  birthday: yup.date().required(),
  isMale: yup.boolean().required(),
});
const postResponseSchema = yup.object({
  data: userResponseSchema,
});

const getUserData = () => ({
  firstName: 'Brad',
  lastName: 'Pitt',
  email: `pitt${Date.now()}@gmail.com`,
  password: 'pitt123',
  birthday: '1963-12-18',
  isMale: true,
});
const user = getUserData();

afterAll(() => {
  return db.sequelize.close();
});

describe('sign up test', () => {
  test('user registered successfully', async () => {
    const response = await appRequest.post('/api/users').send(user);
    expect(response.statusCode).toBe(201);
    expect(response.body.data.hasOwnProperty('password')).toBe(false);
    expect(postResponseSchema.isValidSync(response.body)).toBe(true);
  });
  test('user registered with repeat email', async () => {
    const response = await appRequest.post('/api/users').send(user);
    expect(response.statusCode).toBe(409);
  });
  test('user registered with empty', async () => {
    const response = await appRequest.post('/api/users').send({});
    expect(response.statusCode).toBe(400);
  });
});

// homework написати тест на перевірку отримання одного юзера та на усіх юзерів
