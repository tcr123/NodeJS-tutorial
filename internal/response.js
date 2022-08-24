function decrypt(url, data) {
    return "data decrypted";
}

function read(url, data) {
    return decrypt(url, data);
}

module.exports = {
    read,
}
