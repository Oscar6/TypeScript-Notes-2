// Const, Let, Var

// const buttons = document.getElementsByTagName("button");

// for (let i = 0; i < buttons.length; i++) {
//     const button = buttons[i];
//     button.addEventListener("click", function() {
//         alert("Button " + i + " Pressed");
//     })
// }


// Template Strings

function print(name, age, profession, identifier) {
    document.write(
        `
        Name: ${name}<br>
        Age: ${age}<br>
        Profession: ${profession}<br>
        Identifier: ${identifier}
        `
    );
}
print("Olive", 3, "Dog", "female")