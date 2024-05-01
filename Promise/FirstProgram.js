// javascript prorgram to show promise func()
function walterpromise(duration) {
    // declaring the promise func()
    const p = new Promise(function(resolve){
        // setTimeout()
        setTimeout(function(){
            resolve("I am resolved");
        }, duration);
    })
    return p;
}

// Calling the promisified func()
const ans = walterpromise(3000);
ans.then(function(){
    console.log("timeout is done")
})

