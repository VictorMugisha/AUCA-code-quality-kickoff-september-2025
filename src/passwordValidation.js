export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

const isLenght10 = (password) => String(password).length === 10;
const hasDigit = (password) => /\d/.test(password);
const onlyLettersAndDigits = (password) => /^[A-Za-z0-9]+$/.test(password);
const hasLowerAndUper = (password) =>
  /[A-Z]/.test(password) && /[a-z]/.test(password);
function noSequentialNumbers(password) {
  for (let i = 0; i < password.length - 2; i++) {
    const d1 = password.charCodeAt(i);
    const d2 = password.charCodeAt(i + 1);
    const d3 = password.charCodeAt(i + 2);
    if (
      /\d/.test(password[i]) &&
      /\d/.test(password[i + 1]) &&
      /\d/.test(password[i + 2])
    ) {
      if (d2 === d1 + 1 && d3 === d2 + 1) return false;
      if (d2 === d1 - 1 && d3 === d2 - 1) return false;
    }
  }
  return true;
}
const notforbiddenPasswords = (password) =>
  !forbiddenPasswords.includes(password);
const hasAtLeast4DifferentChars = (password) => {
  let uniq = new Set(password.split(""));
  return uniq.size >= 4;
};

export default function isValidPassword(password = "") {
  let strPass = String(password);
  return (
    isLenght10(strPass) &&
    onlyLettersAndDigits(strPass) &&
    hasLowerAndUper(strPass) &&
    noSequentialNumbers(password) &&
    notforbiddenPasswords(strPass) &&
    hasDigit(password) &&
    hasAtLeast4DifferentChars(password)
  );
}
