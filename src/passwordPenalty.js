/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
// export default function penaltyPoints(password) {
//   if (typeof password !== "string") return 0

//   let passwordPoints = 0;
//   let simiralLettersCount = 1;

//   const passWordLength = password.length

//   for (let i = 1; i < passWordLength; i++) {
//     const CURRENT_CHARACTER = password[i]
//     const PREVIOUS_CHARACTER = password[i - 1]

//     if (CURRENT_CHARACTER === PREVIOUS_CHARACTER) {
//       simiralLettersCount++;
//       continue
//     }

//     if (simiralLettersCount === 2) passwordPoints += 1;
//     if (simiralLettersCount >= 3) passwordPoints += 2;
//     simiralLettersCount = 1;

//   }
//   return passwordPoints;
// }

export default function penaltyPoints(password){
  if (typeof password !== "string") return 0
  let penaltyScore = 0;
  let consecutiveCount = 0;
  for(let i = 1; i < password.length; i++){
    if(password[i] === password[i-1]){
      consecutiveCount++;
    }else{
      penaltyScore += calculateConsecutivePenalty(consecutiveCount);
      consecutiveCount = 1;
    }
  }
  penaltyScore += calculateConsecutivePenalty(consecutiveCount);
  return penaltyScore;
}

function calculateConsecutivePenalty(count) {
  if (count < 2) return 0;
  if (count === 2) return 1;
  if (count === 3) return 2;
  return 2 + (count - 3);
}