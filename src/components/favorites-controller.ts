import { PokeService } from '../services/pokeService.js';
import { PokemonList } from './pokemon-list.js';
import { PokemonModel } from '../models/Pokemon.js';
import { HttpStoreClass } from '../services/http.store.class.js';
import { MisPokemonsList } from './mis-pokemons-list.js';
export class FavoritesController {
    constructor(public start: number = 0) {

        const promises: Array<Promise<PokemonModel>> = [];
        this.start = start;
        // for (let i = this.start; i < this.start + 10; i++) {
            promises.push(HttpStoreClass.getPokemons());
        // }
        
        Promise.all(promises).then((array) => {
            console.log(array);
            new MisPokemonsList('.list__container-list', array);
        });
    }
   
}
