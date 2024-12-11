"use strict";
function logging(arg) {
    console.log(arg.length);
}
let result = logging([1, 2, 3, 4]);
console.log(result);
function getValues(arg) {
    if (Array.isArray(arg)) {
        for (let value of arg) {
            console.log(value);
        }
    }
    else if (typeof arg === "object") {
        for (let key in arg) {
            console.log(key);
        }
    }
}
/// client code
let obj = { names: "Marudhu", age: 25, living: "coder" };
let outs = getValues(obj);
let arr = [1, 2, 3];
// getValues(arr);
/////////////////////////////// ROBOT ANALOGY \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function moveRobot(distance) {
    if (distance < 0) {
        throw new Error("something wrong");
    }
    console.log("hey please move forward");
}
//// client code
try {
    moveRobot(-2);
}
catch (error) {
    //// type guards helping to detection which one to execute during the run time that means actual object creation if you don't know go back to previous post
    if (error instanceof Error) {
        console.log(error.message);
    }
}
// /// What is exception? very simple guys exception means problem will arise during the execution our code lines for example when the problem occurs it disrupt the normal flow of the codes isn't hahaha
//// as i told you before don't compare with any other language okay in typescript offers only run time error deduction not possible to getting compile time error detection always run time we only getting an error when code execute okay
/// 1) when error occurs in typescript we've creating a error object which means error class instantiation
//// 2) then throwing the error along with flag messages like "Something is wrong check the code blah blah"
//// 3) then catching an error here is the best thing we are using special block of code called try-catch block it will handle all the error smoothly
//// 4) One scenario guys for example we are building a ROBOT there is some common normal instruction move forward, left, right, turn something our command hey robot move forward but there is a wall front of the robot that means problem occurs the robot exception internal system just detect the wall(creates error object) creating as error and throwing to us here front of me have a wall oh okay we gave a next instruction turn please so robot decide to turn and avoid the wall (handle error)
// Exception: A problem that occurs when running a program
// Throw: When the program stops and signals that something went wrong creating an error object with message what you want to say
// Catch: When you handle the problem and decide what to do next
//  Exception Handling
//     Unchecked Exceptions (only run time detection means code execution stage)
//         Error Classes (Instantiation)
//             Error (actual object if you don't the terms please go back to previous posts)
//                 Properties (states, instance properties)
//                    name
//                    message(string)
//                   stack
//                 Methods (function, instance methods)
//                    toString()
//         EvalError (class)
//             Thrown when the eval() function is used improperly.
//         RangeError (class)
//             Thrown when a number is outside an allowable range.
//         ReferenceError (class)
//            Thrown when referencing a non-existent variable.
//         SyntaxError (class)
//             Thrown when there is a syntax error in code.
//         TypeError (class)
//             Thrown when a value is not of the expected type.
//         URIError (class)
//              Thrown when there is an error in URI handling functions.
/// you can also create your own custom error subclasses
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}
try {
    throw new CustomError("This is a custom error.");
}
catch (error) {
    if (error instanceof CustomError) {
        console.log(`Caught a custom error: ${error.message}`);
    }
}
