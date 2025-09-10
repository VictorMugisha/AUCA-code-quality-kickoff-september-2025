export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
// export default function isValidPassword(password = "") {
//   // The following line ensures, that password is always a string, like the number 128 -> string "128"
//   if (typeof password !== "string") password = String(password);

//   if (password.length !== 10) return false

//   const containsNumbers = /\d/;
//   const containsLetters = /[a-zA-Z]/;
//   const containsSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/;

//   if (containsSpecialCharacter.test(password)) return false

//   const isItMixed = containsLetters.test(password) &&
//                     containsNumbers.test(password)
//   if (!isItMixed) return false

//   if (areThereAnyConsecutiveNumbers(password)) return false

//   // Check if password contains both lower and upper cases
//   if (
//     password === password.toUpperCase() ||
//     password === password.toLowerCase()
//   )
//     return false

//   // Checking if password is not a forbidden password
//   if (forbiddenPasswords.includes(password)) return false

//   const setOfPassword = new Set([...password]);
//   if (setOfPassword.size < 4) return false;

//   return true;
// }

// function areThereAnyConsecutiveNumbers(str = "") {
//   for (let i = 0; i < str.length - 2; i++) {
//     const currentDigit = parseInt(str[i]);
//     const nextDigit = parseInt(str[i + 1]);
//     const nextNextDigit = parseInt(str[i + 2]);

//     if (!isNaN(currentDigit) && !isNaN(nextDigit) && !isNaN(nextNextDigit)) {
//       // Check for ascending sequence
//       if (nextDigit === currentDigit + 1 && nextNextDigit === nextDigit + 1) {
//         return true;
//       }
//       // Check for descending sequence
//       if (nextDigit === currentDigit - 1 && nextNextDigit === nextDigit - 1) {
//         return true;
//       }
//     }
//   }

//   return false;
// }

function areThereConsecutiveNumbers(str) {
  for (let i = 0; i < str.length - 2; i++) {
    const current = parseInt(str[i]);
    const next = parseInt(str[i + 1]);
    const nextNext = parseInt(str[i + 2]);
    if (!isNaN(current) && !isNaN(next) && !isNaN(nextNext)) {
      if (next === current + 1 && nextNext === next + 1) return true;
      if (next === current - 1 && nextNext === next - 1) return true;
    }
  }
  return false;
}

export default function isValidPassword(password = "") {
  if (typeof password !== "string") {
    password = String(password);
  }

  if (password.length !== 10) return false;

  const hasNumbers = /\d/.test(password);
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (hasSpecialChar) return false;

  if (!hasLetters || !hasNumbers) return false;

  if (areThereConsecutiveNumbers(password)) return false;

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  if (!hasUpperCase || !hasLowerCase) return false;

  if (forbiddenPasswords.includes(password)) return false;

  const uniqueChars = new Set(password).size;
  if (uniqueChars < 4) return false;

  return true;
}
