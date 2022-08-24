const express = require("express");

const app = express();

function delay(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
};

app.get('/', (req, res) => {
    res.send(`Performance Improvement ${process.pid}`);
});

app.get('/timer', (req, res) => {
    delay(5000);
    res.send(`Ring Ring Ring ${process.pid}`);
});

console.log("Server.js is running...");
console.log("Worker has been started");
app.listen(3000);

