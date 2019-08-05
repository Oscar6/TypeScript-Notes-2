// Basic Types
// let namess: array = ['Olive', 'Finn', 2, true];
// let persons: string = 'Steve';
// let heightInCentimeters: number = 182.121212;
// let names: string[] = ['Olive', 'Finn', 'C3P0', '6', 'Engineer'];
// let numtest: number[] = [6, 12, 6, 8];
// let booltest: boolean[] = [true, false, false];
// Basic Types 2
// let tupleTest: [string, number, boolean] = ['Olive', 4, true];
// enum DoorStats {
//     Open,
//     Closed,
//     Ajar
// }
// function log(val: any) {
//     console.log(val);
// }
// log(DoorStats.Open);
// log(DoorStats[0]);
// Advanced Types;
// Union Types
// var unionType = string | number;
// unionType = 1;
// unionType = 'Hello';
// Type Guards
// function addWithUnion(arg: string | number, arg2: string | number) {
//     return arg1 + arg2;
// }
// function addWithTypeGuard(arg1: string | number, arg2: string | number) : string | number {
//     if(typeof arg1 === "string") {
//         console.log('First argument is a string');
//         return arg1 + arg2;
//     }
//     if(typeof arg1 === "number" && typeof arg2 === "number"){
//         console.log('both arguments are numbers');
//         return arg1 + arg2;
//     }
//     return arg1.toString() + arg2.toString();
// }
// Type Aliases
// type StringOrNumber = string | number;
// function addWithAlias (arg1: StringOrNumber, arg2: StringOrNumber) {
//     return arg1.toString() + arg2.toString();
// }
// Null and Undefined
// function testUndef(test: null | number) {
//     console.log('test parameter: ' + test);
// }
// testUndef(); // will output an error
// testUndef(test:null);
// TypeScript Functions 1
// function addNumbers(a: number, b: number) : string {
//     return(a + b).toString();
// }
// TypeScript Functions 2
function log(val) { console.log(val); }
// function addNumbers(a: number, b: number) : string {
//     return(a + b).toString();
// }
// var addString = function (a: string, b?: string) {
//     return a + b;
// };
// log(addString('Olive ', 'Dog'));
// Default and Rest Parameters
// function buildName(firstName: string, lastname: string = 'Dog')
// function buildName(firstName: string, lastname: number = 6) 
function buildName(firstName, lastname) {
    if (lastname === void 0) { lastname = true; }
    return firstName + " " + lastname;
}
// log(buildName('Olive'));
// Rest Parameter
function buildPerson(firstname) {
    var remainingName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        remainingName[_i - 1] = arguments[_i];
    }
    return firstname + " " + remainingName.join(" ");
}
var personOne = buildPerson(firstname, 'john', remainingName, 'steve', 'paul', 'daniel', 'james');
log(personOne);
log(buildName('Olive'));
