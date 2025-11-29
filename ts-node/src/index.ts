import { printObject, genericFunction, genericFunctionArrow } from './generics/generics';

// printObject('123');
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });
// printObject([1, 2, 3, 4, 5, 6]);
// printObject('Hola mundo!!!');

console.log(genericFunction(123.1416).toFixed(2));
console.log(genericFunction('Hola mundo!!!').toLowerCase());
console.log(genericFunctionArrow(new Date()).setTime(12));