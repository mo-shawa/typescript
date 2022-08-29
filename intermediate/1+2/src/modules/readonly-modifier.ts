/** @format */

type Point = {
	readonly x: number; // immutable from readonly keyword
	y: number;
};

const left: Point = { x: -5, y: 0 };

console.log(left); // error

/* left.x = 3 */ console.log(left.x); // no error

// Classes

class Animal {
	readonly name: string; // can use with protected (before readonly)
	constructor(name: string) {
		this.name = name;
	}
}

const sheep = new Animal('sheep');
/* sheep.name = 'something' */ // error
