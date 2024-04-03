// kis tarah se data ko memory me rakha jata hai aur access kiya jata hai us hisab se data 2 trah se divide kiya gya hai
// 1. primiive
// 7 types

// 1. String
// 2. Null
// 3. Undefined
// 4. Number
// 5. Symbol
// 6. Boolean
// 7. BigInt

// 2. reference type ( Non primitive )
// Array objects Functions

// const score = 100;
// JavaScript is a dynamically typed language, which means
//  that data types of variables are determined by the
// value they hold at runtime and can change throughout
// the program as we assign different values to them.

const id = Symbol(123);
const anotherId = Symbol(123);

// as each thing written in symbol is unique
console.log(id === anotherId);

const Number = 12234455555555;
const bigNumber = 12234455555555n;
// n likhane se bigInt ban jata hai
console.log(typeof bigNumber);

const aray = [1, 2, 3, 4, 5];

let obj = {
  key: "value",
  key1: "value1",
};

// type of all non primitive datatype is object

// type of function is function object
