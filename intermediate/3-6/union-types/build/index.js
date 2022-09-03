"use strict";
/** @format */
// Instead of any, we can use Union Types to allow multiple but specific types through
function formatCommandline(input) {
    let line = '';
    if (typeof input === 'string')
        line = input.trim();
    else
        line = input.join('_');
    return line;
}
console.log(formatCommandline('   sike'));
console.log(formatCommandline(['I', 'wish', 'you', 'well']));
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
// From Unit 4:
/*
const center = {
    x: 0,
    y: 0,
    z: 0,
};

// can extract a type from existing structure:
type Point = typeof center;

const topLeft: Point = {
    x: -5,
    y: 10,
    z: 0,
};

// you can do it inline just the same:

const farOut: typeof center = {
    x: 0,
    y: 0,
    z: 999,
};

// Can use with JSON data

const apiRespone = {
    name: 'stacy',
    mom: 'hot',
};

type StacysMom = typeof apiRespone;
type Person = StacysMom;

function processResponse(person: Person) {
    return person;
}
 */
