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

    // function log(val: any): void {console.log(val)}

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
    // function buildName(firstname: string, lastname: boolean = true) {
    //     return firstname + " " + lastname;
    // }

    // log(buildName('Olive'));

// Rest Parameter
    // function buildPerson(firstname: string, ...remainingName: string[]) {
    //     return firstname + " " + remainingName.join(" ");
    // }

    // let personOne = buildPerson(firstname: 'john', remainingName: 'steve', 'paul', 'daniel', 'james');

    // log(personOne);

    // log(buildName('Olive'));


// Interfaces

    // function log(val: any): void {
    //     console.log(val);
    // }

    // interface IComplexType {
    //     id: number;
    //     name?: string;
    // }

    // let complexType : IComplexType = {id: 1};

    // interface Point {
    //     readonly x: number;
    //     readonly y: number;
    // }

    // let p1: Point = { x: 2, y: 2};

    // p1.x = 6;
    // p1.y = 7;

    // log(p1);


// Classes

    // class SimpleClass {
    //     id: number;
    //     print() : void {
    //         console.log(`SimpleClass has id: ${this.id}`);
    //     }
    // }

    // let mySimpleClass = new SimpleClass();
    // mySimpleClass.id = 10101999;
    // mySimpleClass.print();


// Implementing Interfaces

    // interface Print{
    //     print();
    // }

    // function printClass(a: IPrint){
    //     a.print();
    // }

    // class ClassA implements IPrint{
    //     print(){
    //         console.log('ClassA.print()');
    //     }
    // }

    // class ClassB implements IPrint{
    //     print(){
    //         console.log('ClassB.print()');
    //     }
    // }

    // let classA = new ClassA();
    // classA.print();
    // let classB = new ClassB();


// Class Constructor Function

    // class ClassWithConstructor {
    //     id: number;
    //     name: string;

    //     constructor(_id: number, _name: string) {
    //         this.id = _id;
    //         this.name = _name;
    //     }

    //     getName(): string {
    //         return this.name;
    //     }

    //     getId(): number {
    //         return this.id;
    //     }
    // }

    // var classWithConstructor = new ClassWithConstructor(10, 'Apple');
    // console.log(classWithConstructor.getName());
    // console.log(classWithConstructor.getId());


// Class Modifiers

    // class ClassWithPublicProperty {
    //     public id: number;
    // }

    // let publicAccess = new ClassWithPublicProperty();
    // publicAccess.id = 20;

    // console.log(publicAccess);

    // class classWithAutomaticProperties {
    //     constructor(public id: number, private name: string) {

    //     }
    // }

    // let myAutoClass = new classWithAutomaticProperties( id: 1, name: 'ClassName');
    // console.log(`myAutoClass id: ${myAutoClass.id}`);
    // console.log(`myAutoClass name: ${myAutoClass.name}`);


// Static Modifier
    // class ClassWithPrivateProperty {
    //     private _id: number;
    //     private _name: string;
    //     static _hobby: string = 'Static property is being logged';

    //     static printData(): void {
    //         console.log(this._hobby);
    //     }

    //     get name(): string {
    //         return this._name;
    //     }

    //     set name(value: string) {
    //         this._name = value;
    //     }

    //     get id(): number {
    //         return this._id;
    //     }

    //     set id(value: number) {
    //         this._id = value;
    //     }
    // }

    // ClassWithPrivateProperty._hobby = 'playing video games';
    // console.log(ClassWithPrivateProperty._hobby);

    // ClassWithPrivateProperty.printData();


// Class and Interface Inheritance

    // class BaseClassWithConstructor {
    //     private id: number;
    //     constructor(_id: number) {
    //         this.id = _id;
    //     }
    // }

    // class DerivedClassWithConstructor extends BaseClassWithConstructor {
    //     private name: string;
    //     constructor(_id:number, _name: string) {
    //         super(_id);
    //         this.name = _name;
    //     }
    // }


// Protected Class Members

    // class ClassUsingProtected {
    //     protected id: number;

    //     public getId() {
    //         return this.id;
    //     }
    // }

    // class DerivedFromProtected extends ClassUsingProtected {
    //     constructor() {
    //         super();
    //         this.id = 0;

    //     }
    // }

    // var derivedFromProtected = new DerivedFromProtected();
    // derivedFromProtected.id = 1;
    // console.log(`getID returns ${derivedFromProtected.getId()}`);


// Abstract Classes

    // abstract class AbstractEmployee {
    //     public id: number;
    //     public name: string;
    //     abstract getDetails(): string;
    //     public printDetails() {
    //         console.log(this.getDetails());
    //     }
    // }

    // class NewEmployee extends AbstractEmployee {
    //     getDetails(): string {
    //         return `id: ${this.id}, name: ${this.name}`
    //     }
    // }

    // class NewManager extends NewEmployee {
    //     public Employees: NewEmployees[];
    //     getDetails(): string {
    //         return super.getDetails() + `, Employee Count ${this.Employees.length}`
    //     };
    // }

    // let employee = new NewEmployee();
    // employee.id = 1;
    // employee.name = "Employee Name";
    // employee.printDetails();

    // let manager = new NewManager();
    // manager.id = 2;
    // manager.name = "New Manager";
    // manager.Employees = new Array();
    // manager.printDetails();


// Generics

    // function identity(args: number):number {
    //     return args:
    // }

    // function identity1(args: any): any {
    //     return args;
    // }

    // Define Generic function
        // function identity<T>(arg: T):T {
        //     return arg;
        // }

        // let a = identity(arg: "myString");

        // let b = identity<boolean>(arg: true);


// Generic Interface

    // interface GenericInterface<T> {
    //     (arg: T): T;
    // }

    // class GenericClass<T> {
    //     zeroValue: T;
    //     add: (x: T, y: T) => T;
    // }

// Enum

    // enum DoorState {
    //     Open,
    //     Closed,
    //     Ajar
    // }

    // let frontDoor = DoorState.Closed;
    // console.log(`Front Door is: ${frontDoor}`)


// Introduction Modules

    // export class abc {
    //     a: string;
    //     b: string;

    //     constructor(private _a: string, private _b: string) {
    //         this.a = _a;
    //         this.b = _b;
    //     }
    // }

    // Importing file above to modules file

    // import {abc} from "./modules";

    // let myABC = new abc(_a: 'abc1', _b: 'abc2');

// Import and Export Modules (as)

    // Module File

        // import * as mods from "./modules";

        // let myClass1 = new mods.abc(_a: 'hello', _b: 'world');

        // let myClass2 = new mods.onetwothree('hello', 'hello');

    // Exporting File
        // class abc {
        //     a: string;
        //     b: string;

        //     constructor(private _a: string, private _b: string) {
        //         this.a = _a;
        //         this.b = _b;
        //     }
        // }

        // class onetwothree {
        //     a: string;
        //     b: string;

        //     constructor(private _a: string, private _b: string) {
        //         this.a = _a;
        //         this.b = _b;
        //     }
        // }

        // export { abc }; // rename: export { abc as class1 };
        // export { onetwothree }; // rename: export { abc as class2 };


// Namespaces

    namespace FirstNameSpace {
        class NotExported {
    
        }
        export class NameSpaceClass {
            id: number;
        }
    }

    namespace SecondNameSpace {
        export class NameSpaceClass {
            name: string;
        }
    }

    let firstNameSpace = new FirstNameSpace.NameSpaceClass();
    let notExported = new FirstNameSpace.NotExported();

    let secondNameSpace = new SecondNameSpace.NameSpaceClass();