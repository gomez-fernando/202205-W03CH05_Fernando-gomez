import { PokemonModel } from '../models/Pokemon.js';

export class HttpStoreClass {
    url: string;
    constructor() {
        this.url = 'https://pokeapi.co/api/v2/pokemon';
    }
   
    getPokemon(id: number): Promise<PokemonModel> {
        return fetch(this.url + `/${id}`).then((resp) => resp.json());
    }

}
