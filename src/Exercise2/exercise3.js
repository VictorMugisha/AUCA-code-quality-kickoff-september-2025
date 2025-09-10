// function reverseString(str) {
//   var reversed = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

function reverseString(str = "") {
  if (typeof str !== "string") {
    return "";
  }
  const character = [];
  for (let i = str.length - 1; i >= 0; i--) {
    character.push(str[i]);
  }
  const reverse = character.join("");
  return reverse;
}
