export const format = (name, number) => {
  if (number.toString().slice(-2) >= 11 && number.toString().slice(-2) <= 13) {
    return `${name}, you are the ${number}th customer we serve today. Thank you!`;
} else if (number.toString().slice(-1) == 1) {
    return `${name}, you are the ${number}st customer we serve today. Thank you!`;
} else if (number.toString().slice(-1) == 2) {
    return`${name}, you are the ${number}nd customer we serve today. Thank you!`;
} else if (number.toString().slice(-1) == 3) {
    return`${name}, you are the ${number}rd customer we serve today. Thank you!`;
} else {
     return`${name}, you are the ${number}th customer we serve today. Thank you!`;
}
}


