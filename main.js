const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let biggestNumber = arr[0];
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > biggestNumber) {
        biggestNumber = i;
    }
    console.log("The biggest number from the array is: " + biggestNumber)
}