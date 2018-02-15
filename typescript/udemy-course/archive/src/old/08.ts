// Simple Generic

function echo(data: any) {
    return data;
}

console.log(echo('Chris'));
console.log(echo('21'));
console.log(echo({ name: 'Chris', age: 21 }));

// Better Generic
function betterEcho<T>(data: T): T {
    return data;
}
console.log(betterEcho('Chris'));
console.log(betterEcho('21'));
console.log(betterEcho({ name: 'Chris', age: 21 }));

// Built-in Generics
const testResults: Array<number> = [1.94, 2.33];

// Generic Types and Arrays
function printAll<T>(args: T[]): void {
    args.forEach((el: T) => console.log(el));
}
printAll<string>(['Apple', 'Banana', 'Orange']);

// Generic Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>('whatevs'));

// Generic Classes
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return Number(this.baseValue) * Number(this.multiplyValue);
    }
}
const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = '10';
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());

// MODULE EXERCISE
class MyMap<T> {
    private items: { [key: string]: T } = {};

    setItem(key: string, item: T) {
        this.items[key] = item;
    }

    getItem(key: string): T {
        return this.items[key];
    }

    clear(): void {
        this.items = {};
    }

    printMap(): void {
        for (const [key, value] of Object.entries(this.items)) {
            console.log(`${key} => ${value}`)
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
numberMap.clear();
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', 'Chris');
stringMap.setItem('age', '21');
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
