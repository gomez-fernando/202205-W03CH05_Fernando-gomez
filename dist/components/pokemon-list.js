import { HttpStoreClass } from '../services/http.store.class.js';
// import { AddTask } from './add-task.js';
import { Component } from './component.js';
import { ItemPokemon } from './pokemon.js';
export class PokemonList extends Component {
    selector;
    favorites;
    storeService;
    pokeArray;
    // favorites;
    constructor(selector, pokeArray) {
        super();
        this.selector = selector;
        this.storeService = new HttpStoreClass();
        this.pokeArray = pokeArray;
        this.storeService.getPokemons().then((response) => {
            this.favorites = response;
            this.updateComponent();
        });
        // this.updateComponent();
    }
    createTemplate() {
        //    console.log(this.favorites);
        let html = `
        
        <ul class="list__container-list">`;
        this.pokeArray.forEach((item, favorites) => {
            html += new ItemPokemon('', item, this.favorites).template;
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
        const favId = elem.dataset.id;
        // console.log(this.favorites);
        const ids = this.favorites.map(elem => elem.id);
        //  alert(ids)
        // ev.preventDefault()
        //  if(ids.includes(+favId )){
        //      console.log('es favorito');
        //      alert('es favorito')
        // ev.preventDefault()
        //  }else{
        //     console.log('no es favorito');
        //      alert('no es fav')
        // ev.preventDefault()
        //  }
        let result;
        let promises = [];
        if (favId && ids.includes(+favId)) {
            alert('es favorito');
            elem.src = './assets/no-favorite.png';
            elem.setAttribute('alt', 'white star');
            this.storeService.deletePokemon(favId);
            // result = Promise.all(promises).then((resp ) => {
            //     console.log(resp);
            // })
        }
        else if (favId) {
            alert('no es favorito');
            this.storeService.setPokemon(this.pokeArray[elem.dataset.id - 1]);
            elem.src = './assets/favorite.png';
            elem.setAttribute('alt', 'yellow star');
        }
    }
    handlerChange(ev) {
    }
}
