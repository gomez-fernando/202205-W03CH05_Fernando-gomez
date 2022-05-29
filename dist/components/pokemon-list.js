import { HttpStoreClass } from '../services/http.store.class.js';
import { StoreClass } from '../services/store.class.js';
// import { AddTask } from './add-task.js';
import { Component } from './component.js';
import { ItemPokemon } from './pokemon.js';
export class PokemonList extends Component {
    selector;
    pokemons;
    storeService;
    pokeArray;
    // favorites;
    constructor(selector, pokeArray) {
        super();
        this.selector = selector;
        this.storeService = new HttpStoreClass();
        this.pokeArray = pokeArray;
        // this.favorites = FAVORITES;
        this.updateComponent();
    }
    createTemplate() {
        let html = `
        
        <ul class="list__container-list">`;
        this.pokeArray.forEach((item) => {
            html += new ItemPokemon('', item).template;
        });
        html += `</ul>`;
        return html;
    }
    manageComponent() {
        document
            .querySelectorAll('.add-fav img')
            .forEach((item) => item.addEventListener('click', this.handlerButton.bind(this)));
        document
            .querySelectorAll('[type=checkbox]')
            .forEach((item) => item.addEventListener('change', this.handlerChange.bind(this)));
    }
    updateComponent() {
        this.template = this.createTemplate();
        this.render(this.selector);
        this.manageComponent();
        // new AddTask('slot.addTask', this.addTask.bind(this));
    }
    handlerButton(ev) {
        const elem = ev.target;
        console.log(typeof elem);
        const favId = elem.dataset.id;
        let result = false;
        if (favId) {
            result = StoreClass.setFavorites(+favId);
        }
        if (!!result) {
            elem.src = './assets/favorite.png';
            elem.setAttribute('alt', 'yellow star');
        }
        else {
            elem.src = './assets/no-favorite.png';
            elem.setAttribute('alt', 'white star');
        }
    }

}
