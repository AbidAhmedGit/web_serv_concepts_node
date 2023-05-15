// import modules
const http = require('http');
const port = 8000;

// create server using createServer function
const serv = http.createServer();

// friends array
const friends = [
    {
        id: 0,
        name: 'Abid'
    },
    {
        id: 1,
        name: 'newton'
    },
    {
        id: 2,
        name: 'einstein'
    },
]

serv.on('request',
    (req, res)=>{
        // ['', 'friends', '2']
        const items = req.url.split('/');
        if (items[1] === 'friends'){
            // if the id parameter is present only display that object
            if (items.length === 3){
                idx = Number(items[2]);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(friends[idx]));
            }
            // else display everything
            else{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(friends))
            }
        } else if (items[1] === 'msg'){
            res.write('<h1>')
            res.write('Hello are you a friend?')
            res.write('</h1>')
            res.end()
        } else {
            res.statusCode = 404;
            res.end();
        }
    }
)

// server listen to the port
// necesarry for functionality
serv.listen(port, () => {
    console.log(`listening on port ${port}...`)
})
// serv.listen(8000);