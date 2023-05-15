// import modules
const http = require('http');
const port = 8000;

// create server using createServer function
const serv = http.createServer();

serv.on('request',
    (req, res)=>{
        if (req.url === '/friends'){
            // res.writeHead(200, {
            //     'Content-Type':'application/json'
            // });
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({
                id: 1,
                name: 'Abid'
            }))
        } else if (req.url === '/msg'){
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