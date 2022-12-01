// helloWorld function 
// function helloWorld() {
//     return "Hello, World!";
// }

const helloWorld = function () {
    return "Hello, World!";
}

function sayHello(input){
    if (typeof input == "string"){
    return "Hello, " + input + "!";
    } else {
        return "Hello, World!";
    }
    // if (input === "Alex"){
    //     return "Hello, Alex!";
    // } else if (input === "Jane"){
    //     return "Hello, Jane!";
    // } else if (input === "Pat") {
    //     return "Hello, Pat!";
    // } else {
    //     return input;
    // }
}

function isFive(input){
    if(input === 5 || input === "5"){
        return 5;
    }else{
    return typeof input === "boolean";
    }
}

function isEven(input) {
    if (input % 2 == 0){
        return true;
    } else {
        return false;
    }
}
    // if (input === 2 || input === -4 || input === "8") {
    //     return true;
    // } if (input === 3 || input === "banana" || input === Infinity || typeof input === "boolean") {
    //             return false;
    //         } else {
    //             return typeof input === "boolean";
    //         }
    //     }