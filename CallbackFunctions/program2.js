// Javascript example to show callback functions()
function square(n) {
    return result = n * n;
}
 
function cube(n) {
    return result = n * n * n; 
}

function SumofSqaures(a, b){
    let square1 = square(a);
    let square2 = square(b);
    return square1 + square2;

}

let ans = SumofSqaures(2,5);
console.log(ans)