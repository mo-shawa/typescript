"use strict";
function area(shape) {
    if (shape.kind === 'circle')
        return Math.PI * shape.radius ** 2;
    if (shape.kind === 'rectangle')
        return shape.height * shape.width;
    if (shape.kind === 'square')
        return shape.size * shape.size;
}
let soco = {
    radius: 3,
    kind: 'circle',
};
console.log(area(soco));
function logResult(result) {
    if (result.isValid)
        return console.log(result.validatedValue);
    return console.log('fail');
}
let result = {
    isValid: false,
    error: 'u suck as coding',
};
let result2 = {
    isValid: true,
    validatedValue: 'nice',
};
logResult(result2);
logResult(result);
