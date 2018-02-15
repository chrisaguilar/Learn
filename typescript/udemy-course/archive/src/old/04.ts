console.log("======== 04 - TS & ES6 ========");

const double = (value: number): number => value * 2;
console.log(double(10));

const sayHi = (name: string = 'Chris'): void => console.log(`Hello ${name}`);
sayHi();
sayHi('Amy');

const numbers: number[] = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

const newArray: number[] = [55, 20];
console.log([...numbers, ...newArray]);

const [ res1, res2, res3 ]: [ number, number, number ] = [3.89, 2.99, 1.38];
console.log(res1, res2, res3);

type ScienceMan = { firstName: string, experience: number };
const scientist: ScienceMan = { firstName: 'Will', experience: 12 };
const { firstName, experience }: ScienceMan = scientist;
console.log(firstName, experience);
