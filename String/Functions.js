// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.


// String length
let str = "Hello World";
console.log(str.length);

//String indexOf()
let str1 = "I'm not in danger, I am the danger!"
//let index = str1.indexOf("not");
console.log(str1.indexOf("danger"))

// String lastIndexOf()
let str2 = "Bloody hell bloody hell bloody hell bloody hell";
console.log(str2.lastIndexOf("hell"))

// String slice
let str3 = "Hello";
console.log(str3.slice(0, 4));

// String substring
let str4 = "Hello";
console.log(str4.substring(0, 4));

// String replace
let str5  = "Avada Kadavra"
console.log(str5.replace("Avada", "Alohomora"))

// String split
let str6 = "chandni chowk to china";
console.log("Original Text: "+str6);
console.log("After String Split: " +str6.split("c"))

let str7= "chandni chowk to china";
console.log("Original Text: "+str6);
console.log("After String Split: " +str6.split("c"))

// String toUpperCase()
let str8 = "hello world"
console.log(str8.toUpperCase())


// String toLowerCase()
let str9 = "HELLO WORLD"
console.log(str9.toLowerCase())

// String trim()
let str10 = "      Hello       World       "
console.log(str10.trim(" "))