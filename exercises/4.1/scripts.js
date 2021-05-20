////////////////////////////////// 1

// let a = 4;
// let b = 6;

// //adicao//
// console.log(a + b);

// //subtracao//
// console.log(a - b);

// //multiplicacao//
// console.log(a * b);

// //divisao//
// console.log(a / b);

// //modulo//
// console.log(a % b);

////////////////////////////////////// 2

// let a = 60;
// let b = 34;

// if (a > b) {
//     console.log(a);
// }

// else {
//     console.log(b);    
// }

/////////////////////////////////////// 3

// let a = 8;
// let b = 121;
// let c = 46;

// if (a > b && a > c) {
//     console.log(a);
// }

// else if (b > a && b > c) {
//     console.log(b);
// }

// else if (c > a && c > b) {
//     console.log(c);
// }

////////////////////////////////////// 4

// let a = 0;

// if (a == 0) {
//     console.log("zero");
// }

// else if (a > 0) {
//     console.log("positivo");
// }

// else if (a < 0) {
//     console.log("negativo");
// }

//////////////////////////////////////// 5

// let angleA = 90;
// let angleB = 60;
// let angleC = 30;

// let isTriangle; 

// if (angleA + angleB + angleC == 180) {
//     isTriangle = true;
// } 
// else {
//     isTriangle = false;
// }

// console.log(isTriangle);

//////////////////////////////////////// 6

// let chessPiece = "queen"; 

// switch (chessPiece) {
//     case "bishop":
//         console.log("diagonals, any number of squares");
//         break;
//     case "knight":
//         console.log("L-shape");
//         break;
//     case "rook":
//         console.log("straight line, any number of squares");
//         break;
//     case "queen":
//         console.log("any direction, any number of squares");
//         break;
//     case "king":
//         console.log("any direction, one square")
//         break;
//     case "pawn":
//         console.log("forward, one space")
//         break;
//     default:
//         console.log("invalid piece") 
// }

///////////////////////////////////////////// 7

// let nota = 80; 

// if (nota < 0 || nota > 100){
//     console.log("ERROR");
// }
// else if (nota >= 90) {
//     console.log("A");
// }
// else if (nota >= 80) {
//     console.log("B");
// }
// else if (nota >= 70) {
//     console.log("C");
// }
// else if (nota >= 60) {
//     console.log("D");
// }
// else if (nota >= 50) {
//     console.log("E");
// }
// else if (nota < 50) {
//     console.log("F");
// }

//////////////////////////////////////////// 8

// let a = 1;
// let b = 7;
// let c = 15;

// let isEven;

// if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
//     isEven = true;
// }

// else {
//     isEven = false;
// }

// console.log(isEven);

////////////////////////////////////////// 9

// let a = 12;
// let b = 2;
// let c = 21;

// let isOdd;

// if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
//     isOdd = true;
// }

// else {
//     isOdd = false;
// }

// console.log(isOdd);

////////////////////////////////////////// 10

// let cost = 310; 
// let sellValue = 520;

// let tax = (20 / 100) * cost

// let unitsSold = 1000;

// let profit = (sellValue - (cost + tax)) * unitsSold

// console.log(profit)

//////////////////////////////////////// 11

let salary = 2724.20;

let inss;
let ir; 

if (salary < 1556.94) {
    inss = (8 / 100) * salary;
}
else if (1556.95 < salary < 2594.92) {
    inss = (9 / 100) * salary;
}
else if (2594.93 < salary < 5189.82) {
    inss = (11 / 100) * salary;
}
else {
    inss = 570.88;
}

if (salary < 1903.98) {
    ir = 0;
}
else if (1903.99 < salary < 2826.65) {
    ir = ((7.5 / 100) * salary) - 142.80;
}
else if (2826.66 < salary < 3751.05) {
    ir = ((15 / 100) * salary) - 354.80;
}
else if (3751.06 < salary < 4664.68) {
    ir = ((22.5 / 100) * salary) - 636.13;
}
else {
    ir = ((27.5 / 100) * salary) - 869.36;
}

let result = (salary - inss) - ir;
let liquidAmount = parseFloat(result).toFixed(2);

console.log(liquidAmount);