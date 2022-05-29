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
    pokemons!: Array<PokemonModel>;
    storeService: HttpStoreClass;
    pokeArray: PokemonModel[];
    // favorites;
    constructor(public selector: string, pokeArray: Array<PokemonModel>) {
        super();
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
    private manageComponent() {
        document
            .querySelectorAll('.add-fav')
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
        const elem = (<HTMLElement>ev.target)
        const favId = elem.dataset.id;

        // console.log(favId);
        let result = false;
        if(favId){
            result = StoreClass.setFavorites(+favId);
        }
        console.log('result: ' + result);
        (!!result) ? elem.innerHTML = 'favorito' : elem.innerHTML = 'np favorito'

        // this.storeService.deleteTask(deletedId).then((status) => {
        //     if (status === 200) {
        //         this.tasks = this.tasks.filter((item) => item.id !== deletedId);
        //         this.updateComponent();
        //     }
        // });
    }

    private handlerChange(ev: Event) {
        // const changeId = (<HTMLElement>ev.target).dataset.id;
        // console.log('change', changeId);
        // const task = this.tasks.find(
        //     (item) => item.id === changeId
        // ) as TaskModel;
        // task.isComplete = !task.isComplete;
        // this.storeService.updateTask(task).then((task) => {
        //     this.tasks = this.tasks.map((item) => ({
        //         ...item,
        //         isComplete:
        //             item.id === changeId ? !item.isComplete : item.isComplete,
        //     }));
        //     this.updateComponent();
        // });
    }

    // public addTask(task: TaskModel) {
    //     // this.tasks = [...this.tasks, task];
    //     this.storeService.setTask(task).then((task) => {
    //         this.tasks.push(task);
    //         this.updateComponent();
    //     });
    // }
}
