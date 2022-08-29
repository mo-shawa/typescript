/** @format */

let regexp: RegExp = new RegExp('a');

let array: number[] = [1, 2, 3];

let set: Set<number> = new Set([1, 2, 3]);

// type alias:

type Point = { x: number; y: number };

let center: Point = {
	x: 3,
	y: 9,
};

let left: Point = {
	x: -5,
	y: 0,
};

// functions:

function add(a: number, b: number): number {
	return a + b;
}

// must annotate rest parameter as array
function sum(...values: number[]): number {
	return values.reduce((acc, curr) => acc + curr);
}

// first class functions:

let addFirstClass: (a: number, b: number) => number;

addFirstClass = (a, b) => {
	return a + b;
};

// function types

type AddType = (a: number, b: number) => number;

const addInstance: AddType = (a, b) => {
	return a + b;
};

//

type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

let point2d: Point2D = { x: 0, y: 1 };
let point3d: Point3D = { x: 0, y: 1, z: 2 };

// type compatibility means we can assign a 3d matrix to a 2d matrix, extra info is fine
// cannot assign 2d to 3d cuz missing data

point2d = point3d;

// this also means that we can pass in a point3d to a function that expects 2d without issue
// but again, not the opposite
function expects2Dpoint(point: Point2D): void {
	console.log({ point });
}

/* expects2Dpoint(point2d)
 */

// Classes

class Animal {
	public name: string; // public is default but we can assign
	protected weight: number; // protected is private but access is inherited by child classes
	constructor(name: string, weight: number) {
		this.name = name;
		this.weight = weight;
	}
}

class Bird extends Animal {
	private flighted: boolean; // private is inaccessible externally to the class body and not accessible to child classes
	constructor(name: string, weight: number, flighted: boolean) {
		super(name, weight);
		this.flighted = flighted;
	}
	getWeight(): number {
		console.log(this.weight);
		return this.weight;
	}
}

const ostrich = new Bird('squeeko', 100, false);
/* ostrich.weight = 39 */ //private
// ostrich.getWeight() // protected inheritace
/* ostrich.flighed = true */ // error, cannot access private outside class
// console.log(ostrich instanceof Animal) // returns true

// "Generics": class specialization
// 1: extend base class with strong typing

class Queue<Type> {
	data: Type[] = [];
	push(item: Type) {
		this.data.push(item);
	}
	pop() {
		return this.data.shift();
	}
}

let queue = new Queue();
queue.push(1);
queue.push('x');

class NumberQueue extends Queue<number> {
	data: number[] = [];
	push(item: number) {
		this.data.push(item);
	}
	pop() {
		return this.data.shift();
	}
}

let queue2 = new NumberQueue();
queue2.push(1);
/* queue2.push('x') */ // error

/* console.log({ queue })
 */
// 2 : Generic with <T>

class GenericQueue<T> {
	data: T[] = [];
	push(item: T) {
		this.data.push(item);
	}
	pop(): any {
		return this.data.shift();
	} // not sure why I cant return type T, had to do any
}

let stringQueue = new Queue<string>();
// stringQueue.push(1) // error
stringQueue.push('x');
12;
console.log({ stringQueue });

// type:any vs :unknown

let any: any;
let unknown: unknown;
// both allow any type to be assigned

any = 4;
any = 'string';

unknown = 5;
unknown = 'strang';

// any allows full js "rights", bypassing TS checks
/* any.non.existent.property.method() */ // no error until runtime
let anyBool: boolean = any; // can set type: any to a strong typed var

// unknown allows any type to be assigned, without bypassing TS type system
/* unknown.non.existent.property.method(); */ // error
/* let unknownBool: boolean = unknown */ // cant set type: unknown to a strong typed var
// type:any exists to make migrating JS code much easier
// type:unknown is a great way to handle multi type legacy variables with sanity checks (if checks)

let legacyVar: unknown;

legacyVar = '  a string';
if (typeof legacyVar === 'string') legacyVar.trim();

legacyVar = 99;
if (typeof legacyVar === 'number') legacyVar.toFixed(2); // error without manually checking type

// Universal utilities:
// lets say we have a function that should universally console.log an element passed to it
// using type:any will decrease type safety
// we should use type:unknown and sanity checks as we did above to maintain universality
function log(value: unknown): unknown {
	console.log(value);
	if (typeof value === 'number') return value.toFixed(2);
	if (typeof value === 'object') return Object.getPrototypeOf(value);
}

console.log(log({ x: 'y', z: 10 }));

const func = (el: number): number => {
	return el;
};

// type assertions:
// telling type checker that you know better "trust me"

let variable: unknown;

// override type check on unknowns
func(variable as number);
// alt syntax -> doesn't work with JSX
func(<number>variable);

// type coercion (type casting)
// TS understand and supports most existing JS methods to convert to num

let leet;
leet = '1337';

// use as number:
let number: number = +leet; // +<string> converts to number
number = +'';
number = Number(leet);
number = parseInt(leet);
number = ~~leet; // ~~<string> converts to number, kinda how !!<value> converts to bool, but by flipping the bits twice

// import example
import { isPalindrome } from './utils/utils';

console.log({ 1: isPalindrome('ewe'), 2: isPalindrome('wwe') });

// how to bypass missing types:
// if we have process.env but no types from node:
import fs from 'fs';

console.log(process.env.user); // error without installing node types or declaring the variable
console.log(fs);

/* moved to ./env.d.ts */

// we can group declarations into a file with the extension .d.ts
// no import needed
