const express = require("express");
const friendsController = require("../controller/friend.controller");

const friendRoute = express.Router();

friendRoute.use((req, res, next) => {
    console.log(`Ip access is ${req.ip}`);
    next();
})

friendRoute.post('/', friendsController.postFriend)
friendRoute.get('/', friendsController.getFriends)
friendRoute.get('/:friendId',friendsController.getFriend)

module.exports = friendRoute;