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
    static async getPokemon(id) {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return await result.json();
    }
}
