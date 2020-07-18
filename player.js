export class Player {
    constructor(symbol, isHuman){
        this.symbol = symbol;
        this.image = `./images/player-${symbol}.svg`;
        this.isHuman = isHuman;
    }
    
}