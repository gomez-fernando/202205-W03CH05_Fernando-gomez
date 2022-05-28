export class HttpStoreClass {
    url;
    constructor() {
        this.url = 'https://pokeapi.co/api/v2/pokemon';
    }
    getPokemon(id) {
        return fetch(this.url + `/${id}`).then((resp) => resp.json());
    }
}
