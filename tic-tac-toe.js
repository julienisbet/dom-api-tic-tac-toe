//board
// squares
// board state --> what xs are where, what os are where
// game status --> win, tie, playing
// update squares with symbols
// validate player moves
//players
// players have a symbol
// players choose squares
// clicking buttons
// game 
//  start a game
//  reset a game
//  turns
//  active

// assumptions
// new game and give up will both just reset the state
// will not keep score for now

import { Game } from './game.js';
document.addEventListener("DOMContentLoaded", event => {
    let game = new Game();
    game.start();
    const actions = document.getElementById("actions")
    actions.addEventListener("click", e => {
        game.reset()
    })
})
