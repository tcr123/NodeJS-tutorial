const EventEmitter = require('events');
const celebrity = new EventEmitter();

celebrity.on("event", (result) => {
    if (result === "win")
        console.log("Congratulation, Ali win");
});

celebrity.on("event", (result) => {
    if (result === "win")
        console.log("Congratulation, Bob win");
});

process.on('exit', (code) => {
    console.log("Process exit event with code: ", code);
});

celebrity.emit("event", "win");