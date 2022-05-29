export class PokeService {
    static async getPokemon(id) {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return await result.json();
    }
}
