"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
const isPalindrome = (str) => {
    return str === str.split('').reverse().join('');
};
exports.isPalindrome = isPalindrome;
