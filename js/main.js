class Player 
{
    constructor(name, symbol) {
        this.name = name,
        this.symbol = symbol,
        this.points = 0,
        this.gamesPlayed = 0
    };

    addPoints(nrOfPoints){
        this.points += nrOfPoints;
    };

    gamesPlayed(){
        this.gamesPlayed += 1;
    };
};

const playerOne = new Player("Henk", "X");
const playerTwo = new Player("Beau", "O");

playerOne.addPoints(30);

console.log(playerOne);