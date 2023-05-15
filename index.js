// import modules
const http = require('http');
const port = 8000;

// create server using createServer function
const serv = http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type':'application/json'
    });
    res.end(JSON.stringify({
        id: 1,
        name: 'Abid'
    }))
})

// server listen to the port
// necesarry for functionality
serv.listen(port, () => {
    console.log(`listening on port ${port}...`)
})
// serv.listen(8000);
