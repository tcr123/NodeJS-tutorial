const express = require("express");
const path = require("path");
const messageRoute = require("./router/message.route");
const friendsRoute = require("./router/friend.route");

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta} ms`);
})

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'view'));

app.use('/sites', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', {
        title: 'My friends are very clever',
        caption: 'Let \'s go skiding',
    })
});

app.use('/friends', friendsRoute);

app.use('/messages', messageRoute);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ...`);
})