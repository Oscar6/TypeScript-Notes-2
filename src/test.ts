// Basic Types

let namess: array = ['Olive', 'Finn', 2, true];

let persons: string = 'Steve';

let heightInCentimeters: number = 182.121212;

let names: string[] = ['Olive', 'Finn', 'C3P0', '6', 'Engineer'];

let numtest: number[] = [6, 12, 6, 8];

let booltest: boolean[] = [true, false, false];

// Basic Types 2

let tupleTest: [string, number, boolean] = ['Olive', 4, true];

enum DoorStats {
    Open,
    Closed,
    Ajar
}

function log(val: any) {
    console.log(val);
}

// log(DoorStats.Open);
log(DoorStats[0]);

// Advance Types;

// Union Types
var unionType = string | number;

unionType = 1;

unionType = 'Hello';

// Type Guards

// function addWithUnion(arg: string | number, arg2: string | number) {
//     return arg1 + arg2;
// }

function addWithTypeGuard(arg1: string | number, arg2: string | number) : string | number {
    if(typeof arg1 === "string") {
        console.log('First argument is a string');
        return arg1 + arg2;
    }

    if(typeof arg1 === "number" && typeof arg2 === "number"){
        console.log('both arguments are numbers');
        return arg1 + arg2;
    }

    return arg1.toString() + arg2.toString();
}

// Type Aliases

type StringOrNumber = string | number;

function addWithAlias (arg1: StringOrNumber, arg2: StringOrNumber) {
    return arg1.toString() + arg2.toString();
}

// Null and Undefined

function testUndef(test: null | number) {
    console.log('test parameter: ' + test);
}

testUndef(); // will output an error
testUndef(test:null);