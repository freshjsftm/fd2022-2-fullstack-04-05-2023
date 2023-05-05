import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getUsers = ({ limit, offset }) =>
  httpClient.get(`/users?limit=${limit}&offset=${offset}`);

export const postUser = (values) => httpClient.post('/users', values);

export const postGroup = (values) =>
  httpClient.post('/groups', values, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
