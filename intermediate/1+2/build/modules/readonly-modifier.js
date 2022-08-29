"use strict";
/** @format */
const left = { x: -5, y: 0 };
console.log(left); // error
/* left.x = 3 */ console.log(left.x); // no error
// Classes
class Animal {
    constructor(name) {
        this.name = name;
    }
}
const sheep = new Animal('sheep');
/* sheep.name = 'something' */ // error
