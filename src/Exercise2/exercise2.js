// function greet(name) {
//   if (name) {
//     return "Hello, " + name + "!";
//   } else {
//     return "Hello!";
//   }
// }

function greet (name = ""){
    if (name = ""){
        return "Hello!";
    }else{
        return `Hello ${name}!`;
    }
}