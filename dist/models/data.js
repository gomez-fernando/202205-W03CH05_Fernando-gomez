import { PokemonModel } from './Pokemon.js';
let pokemons = [
    new PokemonModel('1', 'Pikachu', { front_default: 'dfdfdf' }),
    new PokemonModel('2', 'Bulbasur', { front_default: 'dfdfdf' }),
    new PokemonModel('3', 'Charizard', { front_default: 'dfdfdf' }),
];
export const FAVORITES = pokemons;
