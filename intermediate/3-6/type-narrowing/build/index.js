"use strict";
/** @format */
function padLeft(value, padding) {
    if (typeof padding === 'number')
        return Array(padding).join(' ') + value;
    if (typeof padding === 'string')
        return padding + value;
}
// checking typeof arguments to run each block
// this is fine only for primitives
console.log({
    1: padLeft('Hello', 3),
    2: padLeft('hello', '     '),
    3: padLeft('jep', '+++++++++'),
});
//////////////////////////////////////////////
class Cat {
    meow() {
        console.log('meow');
    }
}
class Dog {
    bark() {
        console.log('woof');
    }
}
// use instanceof when dealing with objects built by class contructors
function speak(animal) {
    if (animal instanceof Cat)
        return animal.meow();
    if (animal instanceof Dog)
        return animal.bark();
    throw new Error('not a valid animal');
}
const dog = new Dog();
const fakeDog = {
    bark() {
        console.log('faux');
    },
};
speak(dog);
function area(shape) {
    if ('size' in shape)
        return shape.size * shape.size;
    if ('width' in shape)
        return shape.width * shape.height;
}
//  since like fakeDog these are not instances of a class but fit the type, our type inference can be done with the `in` operator to check if a certain key lives on the object and avoid errors
console.log(area({ size: 5 }));
console.log(area({ width: 5, height: 3 }));
