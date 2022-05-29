import { PokeService } from '../services/pokeService.js';
import { PokemonList } from './pokemon-list.js';
// import { StoreClass } from '../services/store.class.js';
export class Controller {
    start;
    // handlerButton: Function;
    constructor(start = 1) {
        this.start = start;
        const promises = [];
        this.start = start;
        for (let i = this.start; i < this.start + 10; i++) {
            promises.push(PokeService.getPokemon(i));
        }
        Promise.all(promises).then((array) => {
            new PokemonList('.list__container-list', array);
        });
    }
}
// function handlerButton(ev: any, Event: { new(type: string, eventInitDict?: EventInit | undefined): Event; prototype: Event; readonly AT_TARGET: number; readonly BUBBLING_PHASE: number; readonly CAPTURING_PHASE: number; readonly NONE: number; }) {
//     throw new Error('Function not implemented.');
// }
// function handlerButton(ev: Event) {
//     const starTitle = ev.target.dataset.star;
//     // const starName = ev.target.dataset.name;
//     // const item = this.series.find(element => element.name === starName);
//     // if (item !== undefined && starTitle !== undefined) {
//     //     item.score = parseInt(starTitle, 10);
//     //     item.watched = true;
//     //     new StoreClass().setSeries(this.series);
//     //     new SeriesList('section.series-pending', false);
//     //     new SeriesList('section.series-watched', true);
//     // }
// }
