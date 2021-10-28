console.log('first');
// setInterval(() => {
//     console.log('third');
// }, 5000);

let seconds = 0;

const tiemId = setInterval(() => {
    // seconds++;
    console.log(++seconds);
    if (seconds > 20) {
        clearInterval(tiemId);
    }
}, 1000);
console.log('second');
