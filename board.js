export class Board {
    constructor(){
        this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.status = "PLAYING";
    }

    reset(){
        this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.status = "PLAYING";
    }
    
    validMove(index){
        return this.state[index] === 0;
    }

    update(symbol, index) {
        this.state[index] = symbol;
    }

    updateStatus(symbol){
        if (
            (this.state[0] === this.state[1] && this.state[1] === this.state[2] && this.state[2] === symbol) ||
            (this.state[3] === this.state[4] && this.state[4] === this.state[5] && this.state[5] === symbol) ||
            (this.state[6] === this.state[7] && this.state[7] === this.state[8] && this.state[8] === symbol) ||
            (this.state[0] === this.state[4] && this.state[4] === this.state[8] && this.state[8] === symbol) ||
            (this.state[6] === this.state[4] && this.state[4] === this.state[2] && this.state[2] === symbol) ||
            (this.state[0] === this.state[3] && this.state[3] === this.state[6] && this.state[6] === symbol) ||
            (this.state[1] === this.state[4] && this.state[4] === this.state[7] && this.state[7] === symbol) ||
            (this.state[2] === this.state[5] && this.state[5] === this.state[8] && this.state[8] === symbol) 
        ) {
            this.status = "WINNER"
        } else if(!this.state.includes(0)) {
            this.status = "TIE";
        }
    }

}