"use strict";
/** @format */
// Literal types: type that is an explicit value, not just the bluprint
// Ex:
let northDirection;
northDirection = 'North';
let directions;
let direction;
direction = 'North';
direction = 'South';
direction = 'East';
function rollDice() {
    return (Math.floor(Math.random() * 6) + 1); // type assertion
}
