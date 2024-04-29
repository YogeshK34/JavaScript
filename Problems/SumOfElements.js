let number = 456;
let sum = 0;
while(number > 0){
    let last_digit = number % 10;
    sum += last_digit;

    number = Math.floor(number / 10);
}
console.log(sum);

// 1. Write a program to find the sum of the digits of a given number