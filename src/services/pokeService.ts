import { PokemonModel } from "../models/Pokemon";

export class PokeService {
   
    static async getPokemon(id: number): Promise<PokemonModel> {
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return await result.json();
    }

  }