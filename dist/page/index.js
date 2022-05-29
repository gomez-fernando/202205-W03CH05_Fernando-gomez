import { Controller } from '../components/controller.js';
import { StoreClass } from '../services/store.class.js';
// import { PokemonList } from '../components/pokemon-list.js';
export function index() {
    StoreClass.setLastPokemon('10');
    // console.log(StoreClass.getFavorites());
    // if(StoreClass.getFavorites() === '[]'){
    //     StoreClass.setInitialFavorites();
    // }
    new Controller();
    const leftButton = document.querySelector('#left');
    const rightButton = document.querySelector('#right');
    leftButton?.addEventListener('click', () => {
        let index = +StoreClass.getLastPokemon();
        if (index >= 11) {
            StoreClass.setLastPokemon((index - 10).toString());
            new Controller(index - 19);
        }
    });
    rightButton?.addEventListener('click', () => {
        let index = +StoreClass.getLastPokemon();
        if (index <= 890) {
            StoreClass.setLastPokemon((index + 10).toString());
            new Controller(index + 1);
        }
    });
}
