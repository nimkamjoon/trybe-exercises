let numbers = [5, 9, 3, 100, 70, 8, 100, 2, 35, 27];

////////////////////////////////// 1

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// } 

////////////////////////////////// 2

// let sum = 0;

// for (let index = 0; index < numbers.length; index +=1) {
//     sum = sum + numbers[index];
// }

// console.log(sum);

///////////////////////////////// 3

// let sum = 0;

// for (let index = 0; index < numbers.length; index +=1) {
//     sum = sum + numbers[index];
// }

// console.log(sum / numbers.length);

/////////////////////////////////// 4

// let sum = 0;

// for (let index = 0; index < numbers.length; index +=1) {
//     sum = sum + numbers[index];
// }

// let medium = sum / numbers.length;

// if (medium <= 20) {
//     console.log("valor menor ou igual a 20");
// }
// else {
//     console.log("valor maior que 20");
// }

/////////////////////////////////////// 5

// let largestNumber = 0;

// for (let index = 0; index < numbers.length; index +=1) {
//     if (numbers[index] > largestNumber) {
//         largestNumber = numbers[index];
//     } 
// }

// console.log(largestNumber);

//////////////////////////////////// 6

// let oddNumbers = [];

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 != 0) {
//         oddNumbers.push(numbers[index]);
//     }
// }

// if (oddNumbers.length > 0) {
//     console.log(oddNumbers);
// }
// else {
//     console.log("nenhum valor impar encontrado")
// }

//////////////////////////////////////// 7

let smallestNumber = numbers[0];

for (let index = 0; index < numbers.length; index +=1) {
    if (numbers[index] < smallestNumber) {
        smallestNumber = numbers[index];
    } 
}

console.log(smallestNumber);