console.log("======== 02 - USING TYPES ========");
// string
let myName = 'Chris';
// myName = 21;

// number
let myAge = 21;
// myAge = 'Chris';

// boolean
let hasHobbies = false;
// hasHobbies = 1;

// assign types
let myMomsAge: number;
myMomsAge = 1000;
// myMomsAge = '1000';

// array
let hobbies: any[] = ['Cooking', 'Coding'];
hobbies = [100];

// tuples
let address: [string, number] = ['foobar', 99];

// enums
enum Color {
    Gray,           // 0
    Green = 100,    // 100
    Blue = 2,       // 2
    Red,            // 3
    Yellow          // 4
}
let myColor: Color = Color.Green;
console.log(myColor);

// any
let car: any = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3};
console.log(car);

// functions
function returnName(): string {
    return myName;
}
console.log(returnName());

// void
function sayHello(): void {
    console.log('Hello!');
}

// argument types
function multiply(x: number, y: number): number {
    return x * y;
}
console.log(multiply(3, 7));
// console.log(multiply('3', 7));

// function types
let myMultiply: (x: number, y: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects
let userData: { name: string, age: number } = {
    name: 'Chris',
    age: 21
};

// complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],
    output: function(all: boolean): number[] {
        return this.data
    }
};

// type aliases
type Complex = { data: number[], output: (all: boolean) => number[] };
let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function(all: boolean): number[] {
        return this.data
    }
};

// union types
let myRealRealAge: number | string = 21;
myRealRealAge = '21';
// myRealRealAge = true;

// never
function neverReturns(): never {
    throw new Error('An Error!');
}

// Nullable Types
// Enable strictNullChecks
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;


// MODULE EXERCISE
type BankAccount = { money: number, deposit: (value: number) => void };
let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

type Person = { name: string, bankAccount: BankAccount, hobbies: string[] };
let myself: Person = {
    name: 'Chris',
    bankAccount: bankAccount,
    hobbies: ['Cooking', 'Coding']
};

myself.bankAccount.deposit(3000);

console.log(myself);
