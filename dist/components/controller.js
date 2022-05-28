import { PokeService } from '../services/pokeService.js';
import { PokemonList } from './pokemon-list.js';
export class Controller {
    start;
    constructor(start = 1) {
        this.start = start;
        const promises = [];
        this.start = start;
        for (let i = this.start; i < this.start + 10; i++) {
            promises.push(PokeService.getPokemon(i));
        }
        Promise.all(promises).then((array) => {
            console.log(array);
            new PokemonList('.list__container-list', array);
        });
    }
}
