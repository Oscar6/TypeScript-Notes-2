// Const, Let, Var

// const buttons = document.getElementsByTagName("button");

// for (let i = 0; i < buttons.length; i++) {
//     const button = buttons[i];
//     button.addEventListener("click", function() {
//         alert("Button " + i + " Pressed");
//     })
// }


// Template Strings

// function print(name, age, profession, identifier) {
//     document.write(
//         `
//         Name: ${name}<br>
//         Age: ${age}<br>
//         Profession: ${profession}<br>
//         Identifier: ${identifier}
//         `
//     );
// }
// print("Olive", 3, "Dog", "female")


// Data Structures: Sets

// let person = new Set();

// person.add('Olive');
// person.add('Finn');

// console.log(person.size + " pups");
// person.forEach( function (e) {
//     console.log(e);
// })


// For ..Of Loop

// let programming = new Map();

// programming.set('Olive', 'rescued golden mix');
// programming.set('Finn', 'rescued border collie mix');


// for (let x of programming.entries()) {
//     console.log(x);
// }


// For of Coding Challenge: Loop within a loop to log character values

// let sentients = ['Olive', 'Finn', 'Jenn', 'Oscar'];

// for(let x of sentients) {
//     for(let y of x) {
//         console.log(y);
//     }
// }


// Default parameters in Functions and Object Literals

// var person = {
//     name() {
//         return 'Oscar';
//     },
//     age() {
//         return 30;
//     }
// }

// console.log(person.age());
// console.log(person.name());


// Arrow function syntax

// var person = person => console.log(person);

// var a = () => {
//     console.log('Arrow function works')
// };

// a();
// person('Anyone');


// Arrow function and this scope

// var probe = {
//     name: 'voyager 1',
//     missions: [
//         'study solar system', 
//         'send info', 
//         'continue mission'
//     ],
//     printMissions() {
//         this.missions.forEach((mission) => {
//             var str = this.name + " will " + mission;
//             console.log(str);
//         });
//     }
// };

// probe.printMissions()


// Destructuring

// var [first, , , last, ] = ['voyager 1', 'voyager 2', 'hubble', 'juno', 'apollo 11'];

// console.log(first);
// console.log(last);


// Generator Functions

function* myFunction(i) {
    yield i;
    console.log(i + " Your message is being logged");
    yield i + 5;
}

var gen = myFunction(10);

console.log(gen.next());
console.log(gen.next());