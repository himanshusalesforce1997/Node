// let s = "";
// for (i = 1; i <= 7; i++) {
//   for (j = 1; j <= i; j++) {
//     s += "#";
//   }
//   console.log(s);
//   s = "";
// }

//optimise code

// for (let line = "#"; line.length < 8; line += "#")
//   console.log(line);

//------------------------------------------------

// let i;
// for (i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("fizzbuzz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

//optimise code
// for (let n = 1; n <= 100; n++) {
//   let output = "";
//   if (n % 3 == 0) output += "Fizz";
//   if (n % 5 == 0) output += "Buzz";
//   console.log(output || n);
// }

//------------------------------------------------

// let s = "";
// for (i = 0; i < 8; i++) {
//   for (j = 0; j < 8; j++) {
//     if ((i + j) % 2 == 0) {
//       s = s + " ";
//     } else {
//       s = s + "#";
//     }
//   }
//   console.log(s);
//   s = "";
// }

//---------------
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
