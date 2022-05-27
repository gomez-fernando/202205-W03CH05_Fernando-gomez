// const cors = require("cors");
// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("pokemon.json");
// const port = process.env.PORT || 4000;

// server.use(cors());
// server.use(router);
// server.listen(port);

import { index } from '../page/index.js';
import { misPokemon } from '../page/mis-pokemon.js';
import { detalles } from '../page/detalles.js';

(() => {
    const path = location.pathname.split('/');

    if (
        path[path.length - 1] === '' ||
        path[path.length - 1] === 'index.html'
    ) {
        document.addEventListener('DOMContentLoaded', index);
    } else if (path[path.length - 1] === 'mis-pokemon.html') {
        document.addEventListener('DOMContentLoaded', misPokemon);
    } else {
        document.addEventListener('DOMContentLoaded', detalles);
    }
})();
