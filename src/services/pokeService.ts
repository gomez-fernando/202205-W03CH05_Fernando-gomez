import { PokemonModel } from "../models/Pokemon";

export class PokeService {
    // static getPokemonInfo(arg0: number) {
    //     throw new Error('Method not implemented.');
    // }
    // // static async getTen(initialNum) {
    //   try {
    //     const getTenUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=';
  
    //     const result = await fetch(`${getTenUrl}${initialNum}`);
    //     const data = await result.json();
  
    //     const pokePromises = data.results.map(async (e) => {
    //       const pokeResult = await fetch(e.url);
    //       return await pokeResult.json();
    //     });
  
    //     return Promise.all(pokePromises);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }

    // static async getGroup(initialNum: number) {
    //     try {
    //       const getTenUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=';
    
    //       const result = await fetch(`${getTenUrl}${initialNum}`);
    //       const data = await result.json();
    
    //       const pokePromises = data.results.map(async (e: any) => {
    //         const pokeResult = await fetch(e.url);
    //         return await pokeResult.json();
    //       });
    
    //       return Promise.all(pokePromises);
    //     } catch (err) {
    //       console.log(err);
    //     }
    // }
  
    static async getPokemon(id: number): Promise<PokemonModel> {
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return await result.json();
    }

    

    // static getPokemonInfo(id: number): Promise<PokemonModel> {
    //      return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
    //         return response.json();
    //     });
    // }

    // static pokeInfo (){
    //     let pokem;
    //     PokeService.getPokemonInfo(1).then(response => {
    //     pokem = response;
    //         return pokem;
    //     });

    //     // PokeService.getPokemonInfo(1).then((obj) => {
    //     //     pok = obj;
    //     //     console.log(pok);
    //     // });
        
    // }

    // static getPokemonInfo(id: number): PokemonModel {
    //     let result;
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
    //         object => {result = object};
    //     return result;

    //     );

    //   }
  
    // static async getSpecieInfo(url) {
    //   const result = await fetch(url);
    //   return await result.json();
    // }
  
    // static async getEvolutionInfo(url) {
    //   const result = await fetch(url);
    //   return await result.json();
    // }
  
    // static async getAllPokeInfo(pokeId) {
    //   const pokeInfo = await this.getPokemonInfo(pokeId);
    //   const specieInfo = await this.getSpecieInfo(pokeInfo.species.url);
  
    //   const evolutionChain = specieInfo.evolution_chain.url;
    //   const evolutionInfo = await this.getEvolutionInfo(evolutionChain);
  
    //   const abilities = pokeInfo.abilities.map((e) => e.ability.name);
    //   let moves = pokeInfo.moves.map((e) => e.move.name);
    //   if (moves.length < 1) {
    //     const data = await this.getPokemonInfo(specieInfo.id);
    //     const responseMoves = data.moves;
    //     moves = responseMoves.map((e) => e.move.name);
    //   }
    //   const types = pokeInfo.types.map((e) => e.type.name);
  
    //   let stats = {};
    //   pokeInfo.stats.forEach((e) => {
    //     const newStat = {
    //       [e.stat.name]: e.base_stat,
    //     };
    //     stats = { ...stats, ...newStat };
    //   });
    //   const { id, name, height, weight, sprites } = pokeInfo;
  
    //   const descriptions = [];
    //   specieInfo.flavor_text_entries.forEach((e) => {
    //     if (e.language.name === 'en') {
    //       descriptions.push(e.flavor_text);
    //     }
    //   });
  
    //   const varieties = [];
    //   specieInfo.varieties.forEach((e) => {
    //     varieties.push({ ...e.pokemon });
    //   });
  
    //   const evolutionPre = specieInfo.evolves_from_species;
  
    //   let evolutionPost = [];
  
    //   if (evolutionInfo.chain.species.name === pokeInfo.name) {
    //     evolutionPost = evolutionInfo.chain.evolves_to;
    //   } else {
    //     evolutionInfo.chain.evolves_to.forEach((e) => {
    //       if (e.species.name === pokeInfo.name) {
    //         evolutionPost = e.evolves_to;
    //       } else {
    //         e.evolves_to.forEach((subE) => {
    //           if (subE.species.name === pokeInfo.name) {
    //             evolutionPost = pokeInfo.name;
    //           }
    //         });
    //       }
    //     });
    //   }
  
    //   return {
    //     abilities: [...abilities],
    //     moves: [...moves],
    //     types: [...types],
    //     stats,
    //     id,
    //     name,
    //     sprites,
    //     height,
    //     weight,
    //     descriptions,
    //     evolutionPre,
    //     evolutionPost,
    //     varieties,
    //   };
    // }
  
    // static async getAllPokes() {
    //   try {
    //     const response = await fetch(
    //       'https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0',
    //     );
    //     const data = await response.json();
    //     return data.results.map((e) => {
    //       return {
    //         name: e.name,
    //         id: e.url
    //           .replace('https://pokeapi.co/api/v2/pokemon/', '')
    //           .replace('/', ''),
    //       };
    //     });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
  }