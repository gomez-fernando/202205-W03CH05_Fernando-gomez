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
        <li>
            <div>${this.item.id}</div>
            <div>${this.item.name}</div>
            <div><img src="${this.item.sprites.front_default}" alt="${this.item.name}'s image"></div>
            <div><i class="add-fav" ><img data-id="${this.item.id}" src="./assets/no-favorite.png" alt="white star"></i></div>
        </li>
        `;
    }
}
