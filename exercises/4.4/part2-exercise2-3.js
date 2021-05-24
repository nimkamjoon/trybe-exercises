let numbers = [7, 13, 9, 24, 42, 3];

// function pickHighest() {
//     let highestNumber = 0;

//     for (let index = 0; index < numbers.length; index += 1) {
//         if (numbers[index] > highestNumber) {
//             highestNumber = numbers[index]; 
//         }
//     }
//     return highestNumber;
// }

// console.log(pickHighest());

function pickLowest() {
    let lowestNumber = numbers[0]; 

    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[index] < lowestNumber) {
            lowestNumber = numbers[index];
        }
    }
    return lowestNumber;
}

console.log(pickLowest());