const friends = require("../model/friends.model")

function postFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            'error': 'Missing value of friend name',
        });
    }

    const newFriend = {
        name: req.body.name,
        id: friends.length
    }

    friends.push(newFriend);
    res.json(newFriend);
}

function getFriends(req, res) {
    res.json(friends);
}

function getFriend(req, res) {
    const id = Number(req.params.friendId);
    const friend = friends[id];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            'error': "This friend not found"
        })
    }
}

module.exports = {
    postFriend,
    getFriend,
    getFriends
}