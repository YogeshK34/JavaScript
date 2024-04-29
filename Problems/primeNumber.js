function primeNumber(num) {
    if (num % 1 == 0 && num % num == 0) {
        console.log("Number is Prime!");
    }
    else{
        console.log("Number is not Prime1");
    }
}
primeNumber(12);