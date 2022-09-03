/** @format */

function padLeft(value: string, padding: number | string) {
	if (typeof padding === 'number') return Array(padding).join(' ') + value

	if (typeof padding === 'string') return padding + value
}
// checking typeof arguments to run each block
// this is fine only for primitives

console.log({
	1: padLeft('Hello', 3),
	2: padLeft('hello', '     '),
	3: padLeft('jep', '+++++++++'),
})

//////////////////////////////////////////////

class Cat {
	meow() {
		console.log('meow')
	}
}

class Dog {
	bark() {
		console.log('woof')
	}
}

type Pet = Cat | Dog

// use instanceof when dealing with objects built by class contructors

function speak(animal: Pet) {
	animal instanceof Cat && animal.meow() // I guess this works too
	if (animal instanceof Dog) return animal.bark()
	throw new Error('not a valid animal')
}

const dog = new Dog()
const fakeDog = {
	bark() {
		console.log('faux')
	},
}

speak(dog)
/* speak(fakeDog); */ // compiletime error

//////////////////////////////////////////////////

type Square = {
	size: number
}

type Rectangle = {
	width: number
	height: number
}

type Shape = Square | Rectangle

function area(shape: Shape) {
	if ('size' in shape) return shape.size * shape.size
	if ('width' in shape) return shape.width * shape.height
}

//  since like fakeDog these are not instances of a class but fit the type, our type inference can be done with the `in` operator to check if a certain key lives on the object and avoid errors
console.log(area({ size: 5 }))
console.log(area({ width: 5, height: 3 }))
