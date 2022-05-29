import { PokemonModel } from '../models/Pokemon.js';

export class HttpStoreClass {

    url: string;
    pokeApi: string;

    constructor() {
        this.url = 'http://localhost:3000/pokemons';
        this.pokeApi = 'https://pokeapi.co/api/v2/pokemon';
    }
   
    getPokemons(): Promise<Array<PokemonModel>> {
        return fetch(this.url).then((resp) => resp.json());
    }

    getPokemon(id: number): Promise<PokemonModel> {
        return fetch(this.url + `/${id}`).then((resp) => resp.json());
    }

    setPokemon(pokemon: PokemonModel): Promise<PokemonModel> {
        console.log(pokemon);
        const poke: PokemonModel = new PokemonModel(pokemon.id, pokemon.name, {front_default: pokemon.sprites.front_default });
        console.log(poke);

        //   POST
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(poke),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
          
    }

    deletePokemon(id: string): Promise<number> {
        // DELETE
        return fetch(this.url + `/${id}`, {
            method: 'DELETE',
        }).then((response) => response.status);
    }

}
