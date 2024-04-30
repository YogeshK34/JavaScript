let p = new Promise(function(resolve){
    resolve("Hi There")});

    p.then(function(data){

        console.log(data);
    });
    