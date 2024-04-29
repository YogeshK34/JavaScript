function sum(num1, num2, fnToCall){
    let num3 = num1 + num2;
    fnToCall(num3);
}
function displayResult(anyArgument){
    console.log("The method display result is called: "+anyArgument);
}
function displayResult1(anyArgument){
    console.log("The method display result1 is called: "+anyArgument);
}
const ans = sum(10, 20, displayResult);
const ans1 =sum(10, 20, displayResult1);

// Callback function    

