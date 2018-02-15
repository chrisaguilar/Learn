// Decorators

function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class Person {
    constructor() {
        console.log('Hi!');
    }
}

// Decorator Factories
function logging(value: boolean) {
    return value ? logged : null;
}

@logging(true)
class Car {}

// Creating a Useful Decorator
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    };
}

@logging(true)
@printable
class Plant {
    name = 'Green Plant';
}

const plant = new Plant();
(plant as any).print();

// Method Decorator
function editable(value: boolean) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    };
}

function overwritable(value: boolean) {
    return function(target: any, propName: string): any {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}

class Project {
    // @overwritable(false)
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }

    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}

const project = new Project('Super Project');
project.calcBudget();
project.calcBudget = function() {
    console.log(2000);
};
project.calcBudget();

// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log(`target: ${target}`);
    console.log(`methodName: ${methodName}`);
    console.log(`paramIndex: ${paramIndex}`);
}
class Course {
    constructor(public name: string) {}

    printStudentNumbers(name: string, @printInfo printAll: boolean) {
        console.log(printAll ? 10000 : 2000);
    }
}

const course = new Course('Spanish');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);
