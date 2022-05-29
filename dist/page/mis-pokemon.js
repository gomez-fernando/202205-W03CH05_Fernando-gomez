// import { Footer } from '../components/footer.js';
import { MisPokemonsList } from '../components/mis-pokemons-list.js';
import { HttpStoreClass } from '../services/http.store.class.js';
export function misPokemon() {
    const promises = [];
    // const start: number = 1;
    // for (let i = start; i < start + 10; i++) {      TODO cambiar esto a 10 otra vez
    // for (let i = start; i <= start; i++) {
    promises.push(HttpStoreClass.getPokemons());
    // console.log(pokeArray);
    // }
    Promise.all(promises).then((array) => {
        new MisPokemonsList('.list__container-list', array);
    });
}
