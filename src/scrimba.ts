// Scrimba Tutorial Notes


// Enums
    // age.enum.ts file
    // export enum Age {
    //     Olive = 3,
    //     Oscar = 30
    // }

    // name.enum.ts file
    // export enum Names {
    //     dog = 'Olive',
    //     me = 'Oscar'
    // }

    // index.ts
    // import { Age } from './age.enum';
    // import { Names } from './names/enum';

    // function totalAge(age1: Age, age2: Age) {
    //     return age1 + age2;
    // }


// Parameters

    // index.ts file
    // import { Person } from './person.model';

    // function add(val1: number, val2: number) {
    //     return val1 + val2;
    // }

    // add(1, 10);

    // function sayHello(person: Person) {
    //     return `Say hello to my friend, ${person.firstName}.`
    // }

    // sayHello(new Person({firstName: 'Olive'}));

    // person.model.ts file
    // export class Person {
    //     firstName: string;
    //     middleName: string;
    //     lastName: string;

    //     constructor(data?: any) {
    //         this.firstName = data.firstName || 'Olive';
    //         this.middleName = data.middleName || 'Dog';
    //         this.lastName = data.lastName || 'Retriever';
    //     }
    // }


// Interfaces

    // person.interface.ts file
    // export interface Person {
    //     firstName: string;
    //     middleName: string;
    //     lastName: string;
    // }

    // index.ts
    // import { Person } from './person/interface';

    // const example1: Person = {firstName: 'Olive', middleName: 'Pup', lastName: 'Retriever'};

    // example1.firstName = 'Olive';
    // example1.middleName = 'Pup';
    // example1.lastName = 'Retriever';


// Barrels

// Barrel files save space when importing files

// Models

    // index.ts file
    // import { Person } from './person.model';

    // const example1: Person = {
    //     firstName: 'Neo', 
    //     middleName: 'the One', 
    //     lastName: 'Anderson'
    // };

    // example1.firstName = 'Neo';
    // example1.middleName = 'the One';
    // example1.lastName = 'Anderson';

    // person.model.ts
    // export class Person {
    //     firstName: string;
    //     middleName: string;
    //     lastName: string;
    // }

    // constructor(data?: any) {
    //     this.firstName = data.firstName || 'Neo';
    //     this.lastName = data.lastName || 'Anderson';
    //     this.middleName = data.middleName;
    // }


// Generics

    // function example<T>(arg: T[]): T {
    //     return arg[0];
    // }

    // example([5]);


// Access Modifiers

    // index.ts file
    // import { Bear } from './bear.model';
    // import { animal } from './animal.model';

    // const bear = new Bear({name: 'Omega', tail: true});
    // bear.claws = 3;
    // bear.add(1, 2);

    // bear.models.ts
    // import { Animal } from './animal/model';

    // export class Bear extends Animal {
    //     public claws: number;
    //     readonly name: string;
    //     private tail: boolean;

    //     constructor(data?: any) {
    //         super(data);
    //         this.claws = data.claws;
    //         this.name = data.name;
    //         this.tail = data.tail;
    //     }

    //     public add(num1, num2) {
    //         const result = num1 + num2;
    //     return result;
    //     }

    //     private addTwo(num1, num2): number {
    //         return num1 + num2;
    //     }
    // }

    // animal.model.ts

    // export class Animal {
    //     protected type: string;

    //     protected constructor(data?: any) {
    //         this.type = data.type;
    //     }
    // }


// Install & Run TypeScript

    // Install node
    // Install TypeScritp:
        // npm install -g typescript

    // Create a TypeScript file
    // Compile file into JS:
        // tsc index.ts

    // Check JavaScript
        // @ts-check

    // TSLint Setup Tutorial
     // https://youtu.be/_QAbWfcCaKc?t=1783