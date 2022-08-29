"use strict";
/** @format */
class Person {
    constructor(age) {
        this.growOld = () => {
            return this.age++;
        };
        this.getAge = () => {
            return this.age;
        };
        this.age = age;
    }
}
let mo = new Person(28);
mo.growOld();
const growOld = mo.growOld;
growOld();
console.log({ mo });
