// create a counter in javascript (counts from 30 to 0)
// calculate the time it takes from setTimeOut and the inner function actually running
// create a terminal clock

// // 1 
// function countdown() {
//     for (let i = 30; i >= 0; i--) {
//         console.log(i);
//     }
// }

// countdown();

// const start = performance.now();

// setTimeout(() => {
//     const end = performance.now();
//     const elapsed = end - start;
//     console.log(`Time taken: ${elapsed} milliseconds`);
// }, 1000); // Run after 1000 milliseconds (1 second)

function updateClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;

    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(currentTime);
}

setInterval(updateClock, 1000);

