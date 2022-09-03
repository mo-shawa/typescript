"use strict";
// CLASS PARAMETER PROPERTIES
Object.defineProperty(exports, "__esModule", { value: true });
// theres a lot of duplication here
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// TS allows us to condense to this:
class BetterPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const adam = new Person('adam', 12999);
const able = new BetterPerson('able', 13009);
console.log({ adam, able });
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//STRICT COMPILER OPTION
// some basic configs:
let configJSON = {
    strict: true,
    noImplicitAny: false, // can override one "child" config by setting it against strict=true
    // see the tsconfig.json file
};
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// NULL VS UNDEFINED
// this dude is recommend loose equality to cover null AND undefined
console.log(null === undefined); // false
console.log(null == undefined); // true
console.log(null == 0); // false
console.log(null == ''); // false
function somethingCouldBeNull() {
    return Math.random() < 0.5 ? null : '';
}
// so if you want to check for undefined or null without leaking through other falsey values:
const result = somethingCouldBeNull();
if (result == null)
    console.log(result + ' is null');
else
    console.log('not null or undefined');
function takesPersonsDetail(person) {
    console.log(person.name, person.address, person.num);
}
takesPersonsDetail({ name: 'mike', num: 55, address: 'eee' });
// probably useless but wanted to see if you could do it
const movingPoint = {
    x: 1,
    y: 4,
    velocity: {
        x: 30,
        y: 33,
    }
};
//////////////////////////////////////////////////
// NON-NULL ASSERTION OPERATOR: 
// Assertion, same as suffixing "as <type>" to a value, we can also assert that a value is NOT null with this:
// <value>!
// kinda like !important
// overall is basiclaly just an override when you know it's not null but TS doesn't
let point;
console.log(point);
function sendEmail(email) {
    console.log("sent email to " + email);
}
function validateEmail(person) {
    if (person.email == null)
        throw new Error('email is null or undefined');
}
function contact(person) {
    validateEmail(person);
    sendEmail(person.email); // typescript doesn't understand that person is guaranteed to by type string by validateEmail, so this is a good case to override
    // we can avoid this situation if line 150 was included inline in contact() instead of invoked through another function
}
// INTERFACES 
require("./interfaces");
function area(shape) {
    if (shape.kind === 'square')
        return shape.size ** 2;
    if (shape.kind === 'rectangle')
        return shape.height * shape.width;
    // if we make a change like add Circle to Shape, _ensure will error out again to alert us that there is an unhandled case in our code
    if (shape.kind === 'circle')
        return Math.PI * (shape.radius ** 2);
    const _ensureAllCasesAreHandled = shape; // "(:never = shape) === shape should never be assigned to this" 
    return _ensureAllCasesAreHandled;
    // a value being assigned to type never should not happen, and so if there's any unhandled path through the function that might possible lead to us hitting line 187, it will error out and let us know that we missed something
    // all routes through a function should return something
}
