import { PokemonModel } from '../models/Pokemon.js';

export class HttpStoreClass {
   
    static url = 'http://localhost:3000/pokemons';
    
    static getPokemons(): Promise<PokemonModel> {
        return fetch(HttpStoreClass.url).then((resp) => resp.json());
    }

    static getPokemon(id: number): Promise<PokemonModel> {
        return fetch(HttpStoreClass.url + `/${id}`).then((resp) => resp.json());
    }

    setPokemon(task: PokemonModel): Promise<PokemonModel> {
        // POST
        return fetch(HttpStoreClass.url, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }

}
