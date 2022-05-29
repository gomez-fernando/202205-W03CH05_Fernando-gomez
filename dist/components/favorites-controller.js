import { HttpStoreClass } from '../services/http.store.class.js';
import { MisPokemonsList } from './mis-pokemons-list.js';
export class FavoritesController {
    start;
    constructor(start = 0) {
        this.start = start;
        const promises = [];
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
