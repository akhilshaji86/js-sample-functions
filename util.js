/**numbersArray**/
export function findLargeDiff(numbers) {
  if (numbers.length < 2) {
    console.log("Array should have at least two numbers to find a difference.");
    return;
  }

  const largestNum = Math.max(...numbers); // Find the largest number using Math.max
  const smallestNum = Math.min(...numbers); // Find the smallest number using Math.min
return (largestNum - smallestNum);
}

/** find two string is anagram or not**/
function IsAnagram(stringVal1,stringVal2) {
return stringVal1.length=== stringVal2.length 
&& stringVal1.split("").sort().join("")===stringVal2.split("").sort().join("")
}
