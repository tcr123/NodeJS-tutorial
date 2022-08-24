function encrypt(url, data) {
    return `data encrypted to ${url}`;
}

function send(url, data) {
    const encryptData = encrypt(url, data);
    console.log(encryptData);
}

module.exports = {
    send,
}