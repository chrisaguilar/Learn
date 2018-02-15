console.log('======== 05 - CLASSES ========');

class Human {
    private type: string;
    protected age: number = 21;

    public constructor(public name: string, public username: string) {}

    printAge() {
        console.log(this.age);
        this.setType('Spring Chicken');
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const me = new Human('Chris', 'chrisaguilar');
console.log(me.name, me.username);
me.printAge();
// me.setType('Super Cool');

class Chris extends Human {
    constructor(username: string) {
        super('Chris', username);
    }
}
const chris = new Chris('chrisaguilar');
console.log(chris);

// Getters & Setters
class Plant {
    private _species: string;

    get species() {
        return this._species;
    }

    set species(val: string) {
        if (val.length > 3) this._species = val;
        else this.species = 'Default';
    }
}

const plant = new Plant();
console.log(plant.species);
plant.species = 'foobar';
console.log(plant.species);

// Static Properties & Methods
class Helpers {
    static PI: number = Math.PI;
    static circumference(diameter: number): number {
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.circumference(12));

// Abstract Classes
abstract class Project {
    projectName: string = 'Default';
    budget: number;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

const newProject = new ITProject();
console.log(newProject);
newProject.changeName('IT Project');
console.log(newProject);

// private constructors
class OnlyOne {
    private static instance: OnlyOne;
    private constructor(public readonly name: string) {}

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}

// const wrong = new OnlyOne('The Only One');
const right = OnlyOne.getInstance();
console.log(right);

// MODULE EXERCISE
class Car {
    public acceleration: number = 0;

    constructor(public name: string) {}

    public accelerate(speed: number) {
        this.acceleration += speed;
    }

    public honk() {
        console.log('Toot Toot!');
    }
}
const cr = new Car('BMW');
cr.honk();
console.log(cr.acceleration);
cr.accelerate(10);
console.log(cr.acceleration);

class Base {
    constructor(public width: number = 0, public length: number = 0) {}
}

class Rectangle extends Base {
    constructor(width: number, length: number) {
        super(width, length);
    }

    calcSize() {
        return this.width * this.length;
    }
}

const rect = new Rectangle(5, 2);
console.log(rect.calcSize());

class Hoomin {
    private _firstName: string = '';

    get firstName() { return this._firstName; }

    set firstName(val: string) {
        this._firstName = val.length > 3 ? val : '';
    }
}
