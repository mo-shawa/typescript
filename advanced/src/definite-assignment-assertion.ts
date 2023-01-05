let dice: number;

function rollDice(){
    dice = (Math.floor(Math.random() * 6) + 1)
}

rollDice()


console.log(dice!) // can override with non null assertion (!)

rollDice()
console.log(dice) // but wont maintain that it has been assigned