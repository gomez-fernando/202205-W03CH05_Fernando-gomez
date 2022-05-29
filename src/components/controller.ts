import { PokeService } from '../services/pokeService.js';
import { PokemonList } from './pokemon-list.js';
import { PokemonModel } from '../models/Pokemon.js';
// import { StoreClass } from '../services/store.class.js';


export class Controller {
    // handlerButton: Function;
    constructor(public start: number = 1) {

        const promises: Array<Promise<PokemonModel>> = [];
        this.start = start;
        for (let i = this.start; i < this.start + 10; i++) {
            promises.push(PokeService.getPokemon(i));
        }

        
        Promise.all(promises).then((array) => {
            new PokemonList('.list__container-list', array);

        });
    }
   
}
