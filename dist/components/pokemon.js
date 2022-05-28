import { Component } from './component.js';
export class ItemPokemon extends Component {
    item;
    constructor(selector, item) {
        super();
        this.item = item;
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
