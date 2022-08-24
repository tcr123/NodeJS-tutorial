const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
})

const getData = async function() {
    const [users, posts, albums] = await Promise.all(urls.map(url => {
        return fetch(url).then(resp => resp.json())
    }));

    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
}

const getData2 = async function() {
    const arrayOfData = urls.map(url => fetch(url));
    for await (let request of arrayOfData) {
        const data = await request.json();
        console.log(data);
    }
}



