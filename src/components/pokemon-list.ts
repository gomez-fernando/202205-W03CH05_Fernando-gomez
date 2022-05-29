/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-unused-vars */
import { iComponent } from '../interfaces/component.js';
import { PokemonModel } from '../models/Pokemon.js';
import { HttpStoreClass } from '../services/http.store.class.js';
// import { StoreClass } from '../services/store.class.js';
import {PokeService} from '../services/pokeService.js'
import { StoreClass } from '../services/store.class.js';

// import { AddTask } from './add-task.js';
import { Component } from './component.js';
import { FAVORITES } from '../models/data.js';
import { ItemPokemon } from './pokemon.js';

export class PokemonList extends Component implements iComponent {
    favorites!: Array<PokemonModel>;
    storeService: HttpStoreClass;
    pokeArray: PokemonModel[];
    // favorites;
    constructor(public selector: string, pokeArray: Array<PokemonModel>) {
        super();
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
    private manageComponent() {
        document
            .querySelectorAll('.add-fav img')
            .forEach((item) =>
                item.addEventListener('click', this.handlerButton.bind(this))
            );
        document
            .querySelectorAll('[type=checkbox]')
            .forEach((item) =>
                item.addEventListener('change', this.handlerChange.bind(this))
            );
    }
     updateComponent() {
        this.template = this.createTemplate();
        this.render(this.selector);
        this.manageComponent();

        // new AddTask('slot.addTask', this.addTask.bind(this));
    }
     handlerButton(ev: Event) {
        const elem: any = (<HTMLElement>ev.target)
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

        let result: any;
        let promises = [];
        
        if(favId && ids.includes(+favId )){
            alert('es favorito')

            elem.src='./assets/no-favorite.png'
            elem.setAttribute('alt', 'white star');

            this.storeService.deletePokemon(favId)
            
            // result = Promise.all(promises).then((resp ) => {
            //     console.log(resp);
            // })
        } else if(favId){
            alert('no es favorito')

            this.storeService.setPokemon(this.pokeArray[elem.dataset.id -1])

            elem.src='./assets/favorite.png';
            elem.setAttribute('alt', 'yellow star');
        }

    }

    private handlerChange(ev: Event) {
       
    }

}
