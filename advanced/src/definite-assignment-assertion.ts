let dice!: number;

function rollDice(){
    dice = (Math.floor(Math.random() * 6) + 1)
}

rollDice()


console.log(dice!) // can override with non null assertion (!)

rollDice()
console.log(dice) // but wont maintain that it has been assigned

// When using (!) at initialization, this is known as Definite Assignment Assertion, and fixes this case for us

// Class example:

class Point{

    x!: number;
    y!: number;

    constructor(){
        this.moveRandom()
    }

    moveRandom(){
        this.x = Math.random()
        this.y = Math.random()
    }



}