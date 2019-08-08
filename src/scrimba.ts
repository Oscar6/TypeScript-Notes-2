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
    import { Person } from './person.model';

    function add(val1: number, val2: number) {
        return val1 + val2;
    }

    add(1, 10);

    function sayHello(person: Person) {
        return `Say hello to my friend, ${person.firstName}.`
    }

    sayHello(new Person({firstName: 'Olive'}));

    // person.model.ts file
    export class Person {
        firstName: string;
        middleName: string;
        lastName: string;

        constructor(data?: any) {
            this.firstName = data.firstName || 'Olive';
            this.middleName = data.middleName || 'Dog';
            this.lastName = data.lastName || 'Retriever';
        }
    }