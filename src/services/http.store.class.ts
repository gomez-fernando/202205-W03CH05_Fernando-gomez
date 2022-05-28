import { PokemonModel } from '../models/Pokemon.js';

export class HttpStoreClass {
    url: string;
    constructor() {
        this.url = 'https://pokeapi.co/api/v2/pokemon';
    }
   
    getPokemon(id: number): Promise<PokemonModel> {
        return fetch(this.url + `/${id}`).then((resp) => resp.json());
    }


    // setTask(task: TaskModel): Promise<TaskModel> {
    //     // POST
    //     return fetch(this.url, {
    //         method: 'POST',
    //         body: JSON.stringify(task),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     }).then((response) => response.json());
    // }
    // updateTask(task: TaskModel): Promise<TaskModel> {
    //     // PUT / PATCH
    //     return fetch(this.url + `/${task.id}`, {
    //         method: 'PATCH',
    //         body: JSON.stringify(task),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     }).then((response) => response.json());
    // }
    // deleteTask(id: string): Promise<number> {
    //     // DELETE
    //     return fetch(this.url + `/${id}`, {
    //         method: 'DELETE',
    //     }).then((response) => response.status);
    // }
}
