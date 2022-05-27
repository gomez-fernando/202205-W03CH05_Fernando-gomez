/* eslint-disable no-unused-vars */
import { iComponent } from '../interfaces/component.js';
import {PokemonModel} from '../models/Pokemon.js'
import { Component } from './component.js';

export class ItemPokemon extends Component implements iComponent {
    constructor(selector: string, public item: PokemonModel) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
    }
    createTemplate() {
        return `<li>
            <h3>${this.item.id}</h3>
            <h3>${this.item.name}</h3>
            </li>`;
    }
}
