/*Array of integers*/ 

/*a*/
// let arr = [1,2,3,4,5];
// const sum = (arr) => {
//   let addn = 0;
//   for(let element of arr){
//     if(element % 2 !== 0){
//       addn = addn + element;
//     }
//   }
//   return addn;
// }
// console.log(sum(arr))


/*b*/
// let arr = [1,2,3,4,5];
// const sum = (arr) => {
//   let addAtOdd = 0;
//   for(let i = 0; i<arr.length ; i++){
//     if( i % 2 !== 0){
//       addAtOdd = addAtOdd + arr[i];
//     }
//   }
//   return addAtOdd;
// }
// console.log(sum(arr))


/*c*/
// let arr = [1,2,3,4,5];
// const maxElement = (arr) => {
//   let maxNumber = 0;
//   for(let i = 0; i<arr.length ; i++){
//    if(maxNumber < arr[i]){
//      maxNumber = arr[i];
//    }
//   }
//   return maxNumber;
// }
// console.log(maxElement(arr))



/*d*/
// let arr = [1,2,3,4,5,100,10];

// const divByTen = (arr) => {
//   let arrDivByTen = [];

//   for(let i = 0; i<arr.length; i++)
//   {
//     if(arr[i] % 10 == 0){
//            arrDivByTen.push(arr[i]);
//     } 
//   }
//   return arrDivByTen;
// }
// console.log(divByTen(arr))


/*e*/
// let arr = [1,2,3,4,5,100,10];

// const oddOrEvenChange = (arr) => {
//   let oddOrEvenChangedArray = [];

//   for(let i = 0; i<arr.length; i++)
//   {
//     if(arr[i] % 2 == 0){
//       oddOrEvenChangedArray.push(arr[i] - 1);
//     } 
//     else{
//       oddOrEvenChangedArray.push(arr[i] + 1);
//     }
//   }
//   return oddOrEvenChangedArray;
// }
// console.log(oddOrEvenChange(arr))


/*f*/
// let arr = [1,2,3,4,5,100,10];
// const sumOddAndEven = (arr) => {
//   let sumOdd = 0, sumEven = 0;
//   for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] % 2 === 0){
//       sumEven = sumEven + arr[i]; 
//     }
//     else if(arr[i] % 2 !== 0){
//       sumOdd = sumOdd + arr[i]; 
    
//     }
//   }
//   return {sumofOdd: sumOdd, sumofEven: sumEven}
// } 
// console.log(sumOddAndEven(arr))

/*Array of strings*/

/*a*/
// const input = ["apple","orange","mango", "papaya","pineapple",]
// const sameLengthStrings = (input) => 
// {   let sameLength = {};
//     for(let i = 0; i < input.length; i++)
//     {
//        if(sameLength[input[i].length] === undefined){
//          sameLength[input[i].length] = 1;
//        }
//        else {
//          sameLength[input[i].length] = sameLength[input[i].length] + 1;
//        }
//     }
//     return sameLength;
// }

// console.log(sameLengthStrings(input));

/** b*/
// const input = ["apple","orange","mango", "papaya","pineapple",]
// const vowelsInStrings = input => {
//   let vowelsInStringsArray = [];
//   let regex = /[aeiou]/gi;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i].match(regex)) {
//       vowelsInStringsArray.push(input[i]);
//     }
//   }
//   return vowelsInStringsArray;
// };
// console.log(vowelsInStrings(input));

/**c */
// const input = ["apple","orange","mango", "papaya","pineapple",]
// const lengthOfStrings = input => {
//   let arrString = [];
//   for (let i = 0; i < input.length; i++) {
//     arrString.push({
//       [input[i]]: input[i].length
//     });
//   }
//   return arrString;
// };
// console.log(lengthOfStrings(input));
