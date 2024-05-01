function beforeSetTimout() {
    console.log("This line will execute after 5 seconds");
}
setTimeout(beforeSetTimout, 5000);
console.log("After setTimeOut");
