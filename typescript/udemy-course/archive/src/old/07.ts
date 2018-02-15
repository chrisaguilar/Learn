interface NamedPerson {
    [propName: string]: any;
    age?: number;
    firstName: string;
    greet(lastName: string): void;
}

function greet(person: NamedPerson) {
    console.log(`Hello ${person.firstName}`);
}

function changeName(person: NamedPerson) {
    person.firstName = 'Anna';
}

const person = {
    firstName: 'Chris',
    // age: 21,
    hobbies: ['Cooking', 'Coding'],
    greet(lastName: string) {
        console.log(`Hi, I am ${this.firstName} ${lastName}`)
    }
};

// greet({ firstName: 'Chris', age: 21 });
// greet(person);
// changeName(person);
// greet(person);
// person.greet('Anything');

class Person implements NamedPerson {
    firstName: string;
    lastName: string;
    greet(lastName: string) {
        console.log(`Hi, I am ${this.firstName}, ${lastName}`)
    }
}
// const myPerson = new Person();
// myPerson.firstName = 'Christopher';
// greet(myPerson);
// myPerson.greet('Aguilar');
// myPerson.lastName = 'Aguilar';
// console.log(myPerson.lastName);

// region Function Types
interface DoubleValueFunc {
    (x: number, y: number): number;
}
const myDoubleFunction: DoubleValueFunc = (x: number, y: number): number => (x + y) * 2;
console.log(myDoubleFunction(12, 12));
// endregion Function Types

// region Interface Inheritance
interface AgedPerson extends NamedPerson {
    age: number;
}
const oldPerson: AgedPerson = {
    age: 21,
    firstName: 'Chris',
    greet: (lastName: string): void => console.log(`Hello!`);
}
console.log(oldPerson);
// endregion Interface Inheritance
