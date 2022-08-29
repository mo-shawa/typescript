"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let regexp = new RegExp('a');
let array = [1, 2, 3];
let set = new Set([1, 2, 3]);
let center = {
    x: 3,
    y: 9,
};
let left = {
    x: -5,
    y: 0,
};
function add(a, b) {
    return a + b;
}
function sum(...values) {
    return values.reduce((acc, curr) => acc + curr);
}
let addFirstClass;
addFirstClass = (a, b) => {
    return a + b;
};
const addInstance = (a, b) => {
    return a + b;
};
let point2d = { x: 0, y: 1 };
let point3d = { x: 0, y: 1, z: 2 };
point2d = point3d;
function expects2Dpoint(point) {
    console.log({ point });
}
class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
}
class Bird extends Animal {
    constructor(name, weight, flighted) {
        super(name, weight);
        this.flighted = flighted;
    }
    getWeight() {
        console.log(this.weight);
        return this.weight;
    }
}
const ostrich = new Bird('squeeko', 100, false);
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
let queue = new Queue();
queue.push(1);
queue.push('x');
class NumberQueue extends Queue {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
let queue2 = new NumberQueue();
queue2.push(1);
class GenericQueue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
let stringQueue = new Queue();
stringQueue.push('x');
12;
console.log({ stringQueue });
let any;
let unknown;
any = 4;
any = 'string';
unknown = 5;
unknown = 'strang';
let anyBool = any;
let legacyVar;
legacyVar = '  a string';
if (typeof legacyVar === 'string')
    legacyVar.trim();
legacyVar = 99;
if (typeof legacyVar === 'number')
    legacyVar.toFixed(2);
function log(value) {
    console.log(value);
    if (typeof value === 'number')
        return value.toFixed(2);
    if (typeof value === 'object')
        return Object.getPrototypeOf(value);
}
console.log(log({ x: 'y', z: 10 }));
const func = (el) => {
    return el;
};
let variable;
func(variable);
func(variable);
let leet;
leet = '1337';
let number = +leet;
number = +'';
number = Number(leet);
number = parseInt(leet);
number = ~~leet;
const utils_1 = require("./utils/utils");
console.log({ 1: (0, utils_1.isPalindrome)('ewe'), 2: (0, utils_1.isPalindrome)('wwe') });
const fs_1 = __importDefault(require("fs"));
console.log(process.env.user);
console.log(fs_1.default);
