"use strict";
//// GENERICS SHORT AND SWEET EXPLANATION
// when we write TYPESCRIPT code that we have variety of data types to mention explicitly isn't for type safety right marudhu what does generic here GENERIC provides way to create reusable components & functions & classes & interface generics bundled up with single source which means you don't need to explicit type safety data types generics will take care of everything you just know where do we use and how do we use let's see GENERICS can be used : Class instance members, Class Methods, Function argument value and Funtion return types with sinlge source
/////////////////////////////// USE CASES OF GENERICS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// 1) Reusabiity --> we can write a code once with different data types with help of GENERICS
// 2) Type Safety ---> i hop you all know what it is ensuring the data type during the compile-time if anything goes wrong
// 3) SingleSource---> you don't need to mention the data types repetedly GEN adopt based on user type used hahahahahah
//// T ---> Before initial ----> T stands for any type and it could be any data type num, str.....
//// T ---> After initial ----> When we call the function the T adopt based on the input
////// MOST USED PLACES
// Class instance members
// Class methods
// Function Arguments
// Function return types
/// function argument and function return automatically generic adopted you don't need to use any explicit data types
/// type -> T capturing the data types the user provided eg string we can access that information later and there is no lose information
function generic(arg) {
    return arg;
}
// let out = generic("Marudhupandiyan");
// let lengths = out.length;
// console.log(lengths);
// out = 44; //// compile error Type 'number' is not assignable to type 'string' this means once you've assigned value to the argument you can't change the data types the generic protected your datas
//// you can also use this
//// //// you may say we can use "any" yes you're correct but there is chances to leakage our data and "any" can lead to data leakage loss of type information and only gives runtime errors because it bypasses TypeScript's type checking ---> what is type checking before executing the code we need to address the error which compile time but any gives run time error for us
function genericsss(arg) {
    return arg;
}
// let out = genericsss("Marudhu");
// let lengths = out.length;
// out = 33; /// no error you can assign any types no error
// let another = out.length //// you get an run time error "undefined" ahahahha
//////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///// deep dive bit more about generics
//// this function generics<T>(arg: T[]): T[]{}) can take an array OF any type and return an array of that same type this generics function can handle all the array of data type for example array of number, string or other types
////// normal generic function
function generics(arg) {
    ///// before initialization we don't know what data type user gave us till call the function that's why we are getting an error //// Property 'length' does not exist on type 'T'
    //// and nowhere we mentioned arg T has this member of the function argument we don't know sometime user can have provide number data types that time will rise a confusion number doesn't have length property by nature that's why before initialization getting error
    console.log(arg.length);
    return arg;
}
//// interface means you all well know what it is it's common for all of them and must implement all the properties you never escapes only compile time checking no run time checking during the compile time check the types and structures all
///// generic constraints which means we can also access some other data types as well not only T data types like interface structure
function genericss(arg, lengthVal) {
    //   console.log(arg.length);
    //   console.log(arg.name);
    console.log(lengthVal.length, "names length" + " " + lengthVal);
    return arg;
}
//// we must follow the structure with object why because it's easy to find the missing types or values mismatching types for example if we passed only data if we didn't pass the name while the time we getting an error all these happens in compile time we've already talked about no run time interface detection object structure will helps us and code clarity good type safe done
let out = genericss({ data: 12, name: "Marudhupandiyan" }, "Nayanthara");
// let outs = generics(123);
//// you'll getting compile time error Argument of type 'number' is not assignable to parameter of type 'Lengths' because by nature number doesn't have length property that's why we getting error
// by nature no possible to use length property for number data types
// let data = 123;
// data.length; /// Property 'length' does not exist on type 'number
let out2 = genericss({ data: [1, 2], name: "Madonna" }, "Madonna sebastian");
console.log(out2.name); //// it's works no error
console.log(out.name); //// it's works no error
////////////////////////////////////////////////////////////////////////////////////////////
function greet(name) {
    console.log(name.age);
    console.log(name.name);
}
let done = greet({ name: "marudhu", data: 22, age: 24 });
//////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//// in a usual method we can pass all the data types into array but we can easily seprerate them with simple generics helps generic classes
class Gens {
    data;
    str;
    constructor() {
        this.data = [];
        this.str = [];
    }
    Push(item) {
        if (typeof item === "number") {
            ///// type assertion just "as" tells to typescript you're certain right data type so just push it this will resolve the confusion about checks
            ///// we can't use instance of type guards here when we dealing with class instances this will helps us we cannot directly use primitive data types cause they are not classes
            this.data.push(item);
        }
        else {
            this.str.push(item);
        }
    }
    Pop() {
        this.data.pop();
    }
    gettingData() {
        return this.data;
    }
}
let check = new Gens();
check.Push(12);
check.Push(14);
check.Push("Marudhu");
check.Push("Nayanthara");
console.log(check.gettingData());
//// when we extend the class or creating subclasses inherit all the properties and methods and one more thing we are going to inherit that is generics that will allowing to reuse and extend the behavior of Gens with specific or generic types as needed
class SubGen extends Gens {
    constructor() {
        super();
    }
}
/////////////////////////////////////////////////////////////////////////////////////
///// GENERIC FUNCTION WITH IN ARRAY
function reverse(array) {
    let returns = [];
    for (let i = array.length - 1; i >= 0; i--) {
        returns.push(array[i]);
    }
    return returns;
}
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = reverse(numbers);
console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]
// reversedNumbers[0] = "Marudhu"; ///// compile time error Type 'string' is not assignable to type 'number'
/// type erasure type erasure in TypeScript ensures that your code is type-safe at compile time while producing efficient and compatible JavaScript at runtime code or bytecode
