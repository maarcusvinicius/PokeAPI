import axios from 'axios';

const axiios = axios.create({
  imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
  apiUrl: 'https://pokeapi.co/api/v2/pokemon/',
});

export default axiios;