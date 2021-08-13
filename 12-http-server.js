// Create http server
const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our Home Page")
    }
    if (req.url === "/about") {
        res.end("Here is what we are about")
    }
    res.end(`
        <h1>Oops!! 404</h1>
        <p> We can't seem to find the page you're looking for. </p>
        <a href="/"> back home </a>
    `)
})

// listen for port 5000
server.listen(5000)