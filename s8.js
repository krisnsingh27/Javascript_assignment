// From a sentence "I love JavaScript arrays so much",  
//   1. Convert it to an array of words.  
//   2. Reverse the order of words.  
//   3. Remove the first word and last word.

let str = "I love Javascript array so much";


let wordstr = str.split(" ");


let reversewords = wordstr.reverse();


reversewords.shift();  
reversewords.pop();    


let finalStr = reversewords.join(" ");

console.log(finalStr);  // Output: " so array Javascript love"
