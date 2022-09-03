/** @format */

// Literal types: type that is an explicit value, not just the bluprint
// Ex:

let northDirection: 'North';

northDirection = 'North';

let directions: 'North' | 'South' | 'East' | 'West';
type Directions = 'North' | 'South' | 'East' | 'West'; // both work

let direction: Directions;

direction = 'North';
direction = 'South';
direction = 'East';
/* direction = "Left" */ // error

////////////////////////////////////////////////

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice() {
	return (Math.floor(Math.random() * 6) + 1) as DiceValue; // type assertion
}

/* if (rollDice() === 8) return true */ // error since no overlap with DiceValue and 8
