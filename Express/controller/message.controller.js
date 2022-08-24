const path = require("path");

function getMessage(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'));
}

function postMessage(req, res) {
    console.log("Update the information");
}

module.exports = {
    getMessage,
    postMessage
}