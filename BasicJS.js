// P.26
// let age = prompt("Please enter your age");
// let ageRange =
//   age > 17 && age < 61
//     ? "Your age is in range 18-60."
//     : "Your age isn't in range 18-60.";
// alert(ageRange);

// P.27
// if (-1 || 0) alert("first"); //run
// if (-1 && 0) alert("second"); //no
// if (null || (-1 && 0)) alert("third"); //no

// P.28
// let userCurrent, password;
// userCurrent = prompt("Who are you ?");
// if (userCurrent === "Admin") {
//   password = prompt("Please enter password");
//   if (password === "codecamp#7".toLocaleLowerCase()) alert("Welcome");
//   else if (password === " " || password === null) alert("Cancel");
//   else alert("Wrong password");
// } else if (userCurrent === " " || userCurrent === null) {
//   alert("Cancel");
// } else {
//   alert("I don't know you !!");
// }

// P.78
// 1
// function draw(n) {
//   let str = "";
//   for (let i = 0; i < n; i++) {
//     str += "*";
//   }
//   return str;
// }

// 2
// function draw(n) {
//   let str = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) str += "*";
//     str += "\n";
//   }
//   return str;
// }

// 3
// function draw(n) {
//   let str = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) str += `${j + 1}`;
//     str += `\n`;
//   }
//   return str;
// }

// 4
// function draw(n) {
//   let str = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) str += `${i + 1}`;
//     str += `\n`;
//   }
//   return str;
// }

// 5
// function draw(n) {
//   let str = "";
//   for (let i = n; i > 0; i--) {
//     for (let j = 0; j < n; j++) str += `${i}`;
//     str += `\n`;
//   }
//   return str;
// }

// 6
// function draw(n) {
//   let str = "";
//   let num = 1;
//   for (let i = n; i > 0; i--) {
//     for (let j = n; j > 0; j--) {
//       str += `${num}`;
//       num++;
//     }
//     str += `\n`;
//   }
//   return str;
// }

// 7
// function draw(n) {
//   let str = "";
//   let num = n * n;
//   for (let i = n; i > 0; i--) {
//     for (let j = n; j > 0; j--) {
//       str += `${num}`;
//       num--;
//     }
//     str += `\n`;
//   }
//   return str;
// }

// 8
// function draw(n) {
//   let str = "";
//   let num = 0;
//   for (let i = 0; i < n; i++) {
//     str += `${num}`;
//     num += 2;
//     str += `\n`;
//   }
//   return str;
// }

// 9
// function draw(n) {
//   let str = "";
//   let num = 0;
//   for (let i = 0; i < n; i++) {
//     num += 2;
//     str += `${num}`;
//     str += `\n`;
//   }
//   return str;
// }

// 10
// function draw(n) {
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       str += `${i * j}`;
//     }
//     str += `\n`;
//   }
//   return str;
// }

// 11
// function draw(n) {
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (j === i) {
//         str += `-`;
//       } else {
//         str += `*`;
//       }
//     }
//     str += `\n`;
//   }
//   return str;
// }

// 12
// function draw(n) {
//   let str = "";
//   for (let i = n; i > 0; i--) {
//     for (let j = 1; j <= n; j++) {
//       if (j === i) {
//         str += `-`;
//       } else {
//         str += `*`;
//       }
//     }
//     str += `\n`;
//   }
//   return str;
// }

// 13
// function draw(n) {
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (j <= i) {
//         str += `*`;
//       } else {
//         str += `-`;
//       }
//     }
//     str += `\n`;
//   }
//   return str;
// }

// 14
// function draw(n) {
//   let str = "";
// for (let i = n; i > 0; i--) {
//   for (let j = 1; j <= n; j++) {
//     if (j <= i) {
//       str += `*`;
//     } else {
//       str += `-`;
//     }
//   }
//   str += `\n`;
// }
//   return str;
// }

// 15
// function draw(n) {
//   let str = "";
//   for (let i = 1; i < n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (j <= i) {
//         str += `*`;
//       } else {
//         str += `-`;
//       }
//     }
//     str += `\n`;
//   }
//   for (let i = n; i > 0; i--) {
//     for (let j = 1; j <= n; j++) {
//       if (j <= i) {
//         str += `*`;
//       } else {
//         str += `-`;
//       }
//     }
//     str += `\n`;
//   }
//   return str;
// }

// 16
// function draw(n) {
//   let str = "";
//   for (let i = 1; i < n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (j <= i) {
//         str += `${i}`;
//       } else {
//         str += `-`;
//       }
//     }
//     str += `\n`;
//   }
//   for (let i = n; i > 0; i--) {
//     for (let j = 1; j <= n; j++) {
//       if (j <= i) {
//         str += `${i}`;
//       } else {
//         str += `-`;
//       }
//     }
//     str += `\n`;
//   }
//   return str;
// }

// 17
// function draw(n) {
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (n - i < j) {
//         str += `*`;
//       } else {
//         str += `-`;
//       }
//     }
//     str += `\n`;
//   }
//   return str;
// }

// 18
// function draw(n) {
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (j >= i) {
//         str += `*`;
//       } else {
//         str += `-`;
//       }
//     }
//     str += `\n`;
//   }
//   return str;
// }

// 19
// function draw(n) {
//   let str = "";
//   for (let i = 1; i < n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (n - i < j) {
//         str += `*`;
//       } else {
//         str += `-`;
//       }
//     }
//     str += `\n`;
//   }
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (j >= i) {
//         str += `*`;
//       } else {
//         str += `-`;
//       }
//     }
//     str += `\n`;
//   }
//   return str;
// }

// 20
// function draw(n) {
//   let str = "";
//   let k = 1;
//   for (let i = 1; i < n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (n - i < j) {
//         str += `${k}`;
//         k++;
//       } else {
//         str += `-`;
//       }
//     }
//     str += `\n`;
//   }
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (j >= i) {
//         str += `${k}`;
//         k++;
//       } else {
//         str += `-`;
//       }
//     }
//     str += `\n`;
//   }
//   return str;
// }

// 21
// function draw(n) {
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= 2 * n - 1; j++) {
//       if (j <= n - i || j >= n + i) {
//         str += `-`;
//       } else {
//         str += `*`;
//       }
//     }
//     str += `\n`;
//   }
//   return str;
// }

// 22
// function draw(n) {
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= 2 * n - 1; j++) {
//       if (j <= i - 1 || j >= 2 * n - i + 1) {
//         str += `-`;
//       } else {
//         str += `*`;
//       }
//     }
//     str += `\n`;
//   }
//   return str;
// }

// 23
// function draw(n) {
//   let str = "";
//   for (let i = 1; i < n; i++) {
//     for (let j = 1; j <= 2 * n - 1; j++) {
//       if (j <= n - i || j >= n + i) {
//         str += `-`;
//       } else {
//         str += `*`;
//       }
//     }
//     str += `\n`;
//   }
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= 2 * n - 1; j++) {
//       if (j <= i - 1 || j >= 2 * n - i + 1) {
//         str += `-`;
//       } else {
//         str += `*`;
//       }
//     }
//     str += `\n`;
//   }
//   return str;
// }

// 24
function draw(n) {
  let str = "";
  let cnt = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (j <= n - i || j >= n + i) {
        str += `-`;
      } else {
        str += `${cnt}`;
        cnt++;
      }
    }
    str += `\n`;
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (j <= i - 1 || j >= 2 * n - i + 1) {
        str += `-`;
      } else {
        str += `${cnt}`;
        cnt++;
      }
    }
    str += `\n`;
  }
  return str;
}

// call from HTML button
function myFunction() {
  let n = +prompt("Enter n");
  console.log(draw(n));
}
