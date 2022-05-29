import { PokemonModel } from "../models/Pokemon.js";

export class PokeService {
   
    static async getPokemon(id: number): Promise<PokemonModel> {
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return await result.json();
    }

    // getPokemon(id: number): Promise<PokemonModel> {
    //     return fetch(this.url + `/${id}`).then((resp) => resp.json());
    // }

  }