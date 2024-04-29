// Program to show display of async js function
function display(){
        console.log("Display function is called");
    }

    function display1(){
        console.log("Display1 function is called");

    }

    setTimeout(display, 12000);{
        console.log("Display function is being called");
    };
    display1();

    // Program to show display of async js function