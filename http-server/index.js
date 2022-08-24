const http = require("http");

const PORT = 3000;

const friend = [
    {
        'id': 0,
        'name': "chun rong"
    },
    {
        'id': 1,
        'name': "carrot"
    },
    {
        'id': 2,
        'name': "zhengyi"
    }
]

const server = http.createServer();

server.on('request', (req, res) => {
    const items = req.url.split("/");

    if (req.method === 'POST' && items[1] === 'profile') {
        req.on('data', (data) => {
            const f = data.toString();
            console.log('Request:',f);
            friend.push(JSON.parse(f));
        });
        req.pipe(res);
    }
    else if (req.method === 'GET' && items[1] === 'profile') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        if (items.length === 3) {
            res.end(JSON.stringify(friend[items[2]]));
        }
        else {
            res.end(JSON.stringify(friend));
        }
    }
    else if (req.method === 'GET' && items[1] === 'homepage') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li> Hello, welcome to chatHome!!! </li>');
        res.write('<li> This is your new friends, Jason </li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
    else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT, () => {
    console.log("Access to port %d", PORT);
})