import { Component } from './component.js';
export class ItemPokemon extends Component {
    item;
    constructor(selector, item) {
        super();
        this.item = item;
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
