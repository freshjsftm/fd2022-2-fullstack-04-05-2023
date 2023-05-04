import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api'
});

export const getUsers = ({limit, offset})=> httpClient.get('/users?limit=3&offset=20')