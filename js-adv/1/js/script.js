

//  let longestWord = (str) => {
//     let arr = str.split(""); 
//     res = arr.sort().join(""); 
//     return res; 
//   }

  let findMaxLength = (str) =>
    str.split("").sort().join("");

console.log(findMaxLength ("HELLO WORLD abc"));