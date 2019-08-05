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

// Advance Types