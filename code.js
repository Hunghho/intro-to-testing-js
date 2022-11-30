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
