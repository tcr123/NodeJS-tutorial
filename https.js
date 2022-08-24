const {send, read} = require("./internal");

function makeRequest(url, data) {
    send(url, data);
    return read(url, data);
}

const responseData = makeRequest("https://google.com", "hello");
console.log(responseData);