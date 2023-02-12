import axios from 'axios';

const axiios = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export default axiios;