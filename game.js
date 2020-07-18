import { Board } from "./board.js";
import { Player } from "./player.js";

export class Game {
    constructor(){
        this.active = false;
        this.board = new Board();
        this.players = [ new Player('x', true), new Player('o', false)]
        this.turn = 0;
    }

    start(){
        const boardUI = document.getElementById("tic-tac-toe-board");
        this.active = true;
        boardUI.addEventListener("click", e => {
            if (this.active && e.target.classList.contains("square")) {
                const square = e.target.id;
                const squareIndex = parseInt(square.slice(-1))
                this.playTurn(squareIndex);
            }
        })
    }

    reset(){
        this.board = new Board();
        const gameStatus = document.getElementById("game-status")
        gameStatus.innerHTML = "";
        const imageList = document.getElementsByClassName("player-image")
        while(imageList.length > 0) {
            imageList[0].remove();
        }
        this.active = true;
        this.turn = 0;

    }

    currentPlayer(){
        return this.players[this.turn];
    }

    playTurn(index){
        if(this.board.validMove(index)){
            this.board.update(this.currentPlayer().symbol, index)
            this.markBoard(index)
            this.isGameOver()
            return true;
        }
        return false;
    }

    isGameOver(){
        this.board.updateStatus(this.currentPlayer().symbol)
        const gameStatus = document.getElementById("game-status")
        switch(this.board.status){
            case "TIE":
                gameStatus.innerHTML = "SCRATCH GAME!"
                this.active = false
                break;
            case "WINNER":
                gameStatus.innerHTML = `${this.currentPlayer().symbol.toUpperCase()} WINS!`
                this.active = false;
                break;
            default:
                this.switchTurn();
        }
    }

    // Option 1 for random number generator
    // playComputer(){
    //     let randomNum = Math.floor(Math.random() * 9)
    //     for(let i = 0; i < 8; i++) {
    //         if(this.playTurn(randomNum)) {
    //             this.active = true;
    //             break;
    //         }
    //         randomNum = (randomNum + 1) % 9
    //     }
    // }
    
    // Option 2 for random number generator
    
    playComputer(){
        let randomNum = Math.floor(Math.random() * 9)
        console.log("picking a random number ", randomNum)
        if(this.playTurn(randomNum)){
            this.active = true;
            return;
        }
        return this.playComputer()
    }

    switchTurn(){
        this.turn = (this.turn + 1) % 2
        if(!this.currentPlayer().isHuman){
            this.active = false;
            window.setTimeout(this.playComputer.bind(this), 500);
        }
    }

    markBoard(index) {
        const squareEl = document.getElementById(`square-${index}`);
        const img = document.createElement("img");
        img.classList.add("player-image")
        img.src = this.currentPlayer().image;
        squareEl.appendChild(img);
    }

}