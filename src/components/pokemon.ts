/* eslint-disable no-unused-vars */
import { iComponent } from '../interfaces/component.js';
import {PokemonModel} from '../models/Pokemon.js'
import { PokeService } from '../services/pokeService.js';
import { Component } from './component.js';

export class ItemPokemon extends Component implements iComponent {
    constructor(selector: string, public item: PokemonModel) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
        this.item = item;
    }

    createTemplate() {
        return `
        <li>${this.item.id}</li>
        <li>${this.item.name}</li>
        <li><img src="${this.item.sprites.front_default}" alt="${this.item.name}'s image"></li>
        `;
    }

}
